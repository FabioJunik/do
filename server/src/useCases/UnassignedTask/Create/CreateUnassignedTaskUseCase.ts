import { UnassignedTasksRepository } from "../../../repositories/implementations/UnassignedTasksRepository";



export class CreateUnassignedTaskUseCase {
    constructor(private unassignedTasksRepository: UnassignedTasksRepository) { }

    async execute(description: string) {

        if (description === '')
            throw new Error("Description cannot be empty")

        const taskCreated = await this.unassignedTasksRepository.save(description)

        return taskCreated;
    }
}