import { TasksRepository } from "../../../repositories/implementations/TasksRepository";



export class ListTasksUseCase {
    constructor(private tasksRepository: TasksRepository) { }

    async execute() {
        const tasks = await this.tasksRepository.list();

        return tasks;
    }
}