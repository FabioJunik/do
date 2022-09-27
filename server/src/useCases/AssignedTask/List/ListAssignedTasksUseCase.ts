import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";



export class ListAssignedTasksUseCase {
    constructor(private assignedtasksRepository: AssignedTasksRepository) { }

    async execute() {
        const assignedTasks = await this.assignedtasksRepository.list();

        return assignedTasks;
    }
}