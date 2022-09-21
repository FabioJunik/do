import { TasksRepository } from "../../../repositories/implementations/TasksRepository";


interface IRequest {
    employeeId: string;
    description: string;
}

export class CreateTaskUseCase {
    constructor(private tasksRepository: TasksRepository) { }

    async execute({ employeeId, description }: IRequest) {
        const taskCreated = await this.tasksRepository.save({ employeeId, description })

        return taskCreated;
    }
}