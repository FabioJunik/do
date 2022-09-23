import { Request, Response } from "express";
import { ListUnassignedTasksUseCase } from "./ListUnassignedTasksUseCase";


export class ListUnassignedTasksComtroller {
    constructor(private listUnassignedTasksUseCase: ListUnassignedTasksUseCase) { }

    async handle(request: Request, response: Response) {
        const tasks = await this.listUnassignedTasksUseCase.execute();

        return response.json(tasks);
    }
}