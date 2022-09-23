import { Request, Response } from "express";
import { CreateUnassignedTaskUseCase } from "./CreateUnassignedTaskUseCase";


export class CreateUnassignedTaskComtroller {
    constructor(private createUnassignedTaskUseCase: CreateUnassignedTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { description } = request.body;

        const task = await this.createUnassignedTaskUseCase.execute(description);

        return response.status(201).json(task);
    }
}