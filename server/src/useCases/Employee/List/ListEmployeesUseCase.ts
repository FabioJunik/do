import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";


export class ListEmployeesUseCase {
    constructor(private employeesRepository: EmployeesRepository) { }

    async execute() {
        const employees = await this.employeesRepository.list();

        return employees;
    }
}