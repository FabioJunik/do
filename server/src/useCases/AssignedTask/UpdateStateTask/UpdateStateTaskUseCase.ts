import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";


interface IRequest {
    id: string;
    state: string;
}

export class UpdateStateTaskTaskUseCase {
    constructor(private assignedtasksRepository: AssignedTasksRepository) { }

    async execute({ id, state }: IRequest) {
        const taskFound = await this.assignedtasksRepository.findById(id);

        if (!taskFound)
            throw new Error("Task not found")

        const taskUpdated = await this.assignedtasksRepository.updateStateTask({ id, state });

        return taskUpdated;
    }
}