import { PrismaClient } from "@prisma/client";
import { Employee } from "../../entities/Employee";
import { ICreateEmployeeDTO, IEmployeesRepository, IUpdateEmployeeDTO, ListEmployeeProps } from "../IEmployeesRepository";

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
                        id: true,
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
                photoUrl: "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
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
        const employee = await prisma.employee.findUnique({
            where: { id }
        })
        return employee;
    };

    public async delete(id: string): Promise<Employee> {
        const employee = await prisma.employee.delete({ where: { id } })

        return employee;
    };

    public async update(employee: Partial<IUpdateEmployeeDTO>): Promise<Employee> {

        const employeeUpdated = await prisma.employee.update({
            where: {
                id: employee.id
            },
            data: employee
        })

        return employeeUpdated;
    }
}