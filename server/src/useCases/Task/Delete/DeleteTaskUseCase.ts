import { TasksRepository } from "../../../repositories/implementations/TasksRepository";



export class DeleteTaskUseCase {
    constructor(private tasksRepository: TasksRepository) { }

    async execute(id: string) {
        const taskDeleted = await this.tasksRepository.delete(id);
        return taskDeleted
    }
}