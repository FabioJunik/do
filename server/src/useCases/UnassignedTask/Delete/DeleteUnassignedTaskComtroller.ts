import { Request, Response } from "express";
import { DeleteUnassignedTaskUseCase } from "./DeleteUnassignedTaskUseCase";



export class DeleteUnassignedTaskComtroller {
    constructor(private deleteUnassignedTaskUseCase: DeleteUnassignedTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const taskDeleted = await this.deleteUnassignedTaskUseCase.execute(id);

        return response.status(200).json(taskDeleted)

    }
}