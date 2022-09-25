import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";



export class DeleteEmployeeUseCase {
    constructor(private employeesRepository: EmployeesRepository) { }

    async execute(id: string) {
        const taskDeleted = await this.employeesRepository.delete(id);
        return taskDeleted
    }
}