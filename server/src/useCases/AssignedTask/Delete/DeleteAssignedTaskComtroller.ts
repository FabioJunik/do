import { Request, Response } from "express";
import { DeleteAssignedTaskUseCase } from "./DeleteAssignedTaskUseCase";



export class DeleteAssignedTaskComtroller {
    constructor(private deleteAssignedTaskUseCase: DeleteAssignedTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const taskDeleted = await this.deleteAssignedTaskUseCase.execute(id);

        return response.status(200).json(taskDeleted)

    }
}