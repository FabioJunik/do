import { Request, Response } from "express";
import { CreateAssignedTaskUseCase } from "./CreateAssignedTaskUseCase";


export class CreateAssignedTaskComtroller {
    constructor(private createTaskUseCase: CreateAssignedTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { employeeId, description } = request.body;

        const task = await this.createTaskUseCase.execute({ employeeId, description });

        return response.status(201).json(task);
    }
}