import { Request, Response } from "express";
import { ListAssignedTasksUseCase } from "./ListAssignedTasksUseCase";


export class ListAssignedTasksComtroller {
    constructor(private listAssignedTasksUseCase: ListAssignedTasksUseCase) { }

    async handle(request: Request, response: Response) {
        const Assignedtasks = await this.listAssignedTasksUseCase.execute();

        return response.json(Assignedtasks);
    }
}