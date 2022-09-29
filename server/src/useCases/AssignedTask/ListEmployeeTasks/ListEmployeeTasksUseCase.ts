import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";

interface IRequest {
    id: string;
}

export class ListEmployeeTasksUseCase {
    constructor(private employeeTasksRepository: AssignedTasksRepository) { }

    async execute({ id }: IRequest) {

        const employeeHaveAssignedTasks = await this.employeeTasksRepository.employeeHaveAssignedTasks(id);

        if (!employeeHaveAssignedTasks)
            throw new Error("Employee don't have assigned tasks")

        const employeeTasks = await this.employeeTasksRepository.listTasksByEmployee(id);

        return employeeTasks;
    }
}