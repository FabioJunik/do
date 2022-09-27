import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";


interface IRequest {
    employeeId: string;
    description: string;
}

export class CreateAssignedTaskUseCase {
    constructor(private assignedtasksRepository: AssignedTasksRepository) { }

    async execute({ employeeId, description }: IRequest) {
        const taskCreated = await this.assignedtasksRepository.save({ employeeId, description })

        return taskCreated;
    }
}