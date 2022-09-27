import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";



export class DeleteAssignedTaskUseCase {
    constructor(private assignedtasksRepository: AssignedTasksRepository) { }

    async execute(id: string) {
        const taskDeleted = await this.assignedtasksRepository.delete(id);
        return taskDeleted
    }
}