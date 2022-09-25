import { PrismaClient } from "@prisma/client";
import { Employee } from "../../entities/Employee";
import { ICreateEmployeeDTO, IEmployeesRepository, ListEmployeeProps } from "../IEmployeesRepository";

const prisma = new PrismaClient();

export class EmployeesRepository implements IEmployeesRepository {
    private employees: Employee[];

    private static INSTANCE: EmployeesRepository;

    private constructor() {
        this.employees = [];
    }

    public static getINSTANCE(): EmployeesRepository {
        if (!EmployeesRepository.INSTANCE)
            EmployeesRepository.INSTANCE = new EmployeesRepository();

        return EmployeesRepository.INSTANCE;
    }

    public async list(): Promise<ListEmployeeProps[]> {
        const employees = await prisma.employee.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                photoUrl: true,
                role: {
                    select: {
                        name: true
                    }
                },
            },
        });

        return employees;
    }

    public async save(employee: ICreateEmployeeDTO): Promise<Employee> {
        const employeeData = await prisma.employee.create({
            data: {
                roleId: employee.roleId,
                name: employee.name,
                email: employee.email,
                password: employee.password,
                photoUrl: employee.photoUrl,
            }
        })

        return employeeData;
    }

    public async findByEmail(email: string): Promise<Employee> {
        const employee = await prisma.employee.findFirst({
            where: { email }
        })
        return employee;
    };

    public async findById(id: string): Promise<Employee> {
        const employee = await prisma.employee.findUniqueOrThrow({
            where: { id }
        })
        return employee;
    };


}