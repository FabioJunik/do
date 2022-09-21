import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";


export class CreateTaskComtroller {
    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { employeeId, description } = request.body;

        const task = await this.createTaskUseCase.execute({ employeeId, description });

        return response.status(201).json(task);
    }
}