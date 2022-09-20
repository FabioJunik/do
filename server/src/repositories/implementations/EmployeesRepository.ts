import { PrismaClient } from "@prisma/client";
import { Employee } from "../../entities/Employee";
import { ICreateEmployeeDTO, IEmployeesRepository } from "../IEmployeesRepository";

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

    public async list(): Promise<Employee[]> {
        this.employees = await prisma.employee.findMany();

        return this.employees;
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
        return;
    };

    public async findById(email: string): Promise<Employee> {
        return;
    };


}