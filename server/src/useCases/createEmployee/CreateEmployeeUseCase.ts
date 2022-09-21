import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

interface IRequest {
    roleId: string;
    name: string;
    email: string;
    password: string;
    photoUrl: string;
}

export class CreateEmployeeUseCase {
    constructor(private employeeRepository: IEmployeesRepository) { }

    async execute(employee: IRequest) {
        const employeeFound = await this.employeeRepository.findByEmail(employee.email);

        if (employeeFound)
            throw new Error("Employee already exists")

        this.employeeRepository.save(employee);

    }
}