import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";



export class DeleteTaskComtroller {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const taskDeleted = await this.deleteTaskUseCase.execute(id);

        return response.status(200).json(taskDeleted)

    }
}