import { Request, Response } from "express";
import { UpdateStateTaskTaskUseCase } from "./UpdateStateTaskUseCase";


export class UpdateStateTaskController {
    constructor(private updateStateTaskTaskUseCase: UpdateStateTaskTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { state } = request.body;
        const { id } = request.params;

        const task = await this.updateStateTaskTaskUseCase.execute({ id, state });

        return response.status(201).json(task);
    }
}