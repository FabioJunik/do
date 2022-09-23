import { UnassignedTasksRepository } from "../../../repositories/implementations/UnassignedTasksRepository";


export class ListUnassignedTasksUseCase {
    constructor(private unassignedTasksRepository: UnassignedTasksRepository) { }

    async execute() {
        const tasks = await this.unassignedTasksRepository.list();

        return tasks;
    }
}