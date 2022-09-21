import { Request, Response } from "express";
import { ListTasksUseCase } from "./ListTasksUseCase";


export class ListTasksComtroller {
    constructor(private listTasksUseCase: ListTasksUseCase) { }

    async handle(request: Request, response: Response) {
        const tasks = await this.listTasksUseCase.execute();

        return response.json(tasks);
    }
}