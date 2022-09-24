import { UnassignedTasksRepository } from "../../../repositories/implementations/UnassignedTasksRepository";



export class DeleteUnassignedTaskUseCase {
    constructor(private unassignedTasksRepository: UnassignedTasksRepository) { }

    async execute(id: string) {
        const taskDeleted = await this.unassignedTasksRepository.delete(id);
        return taskDeleted
    }
}