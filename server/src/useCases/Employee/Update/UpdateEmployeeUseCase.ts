import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";

interface IRequest {
    id: string;
    roleId: string;
    name: string;
    email: string;
}


export class UpdateEmployeeUseCase {
    constructor(private employeesRepository: EmployeesRepository) { }

    async execute(employee: IRequest) {
        const employeeFound = await this.employeesRepository.findById(employee.id);

        if (!employeeFound)
            throw new Error("Employee not found");

        const employeeUpdated = await this.employeesRepository.update(employee);

        return employeeUpdated;
    }
}