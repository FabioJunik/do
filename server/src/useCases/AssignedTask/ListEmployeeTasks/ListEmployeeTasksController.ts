import { Request, Response } from "express";
import { ListEmployeeTasksUseCase } from "./ListEmployeeTasksUseCase";


export class ListEmployeeTasksComtroller {
    constructor(private listEmployeeTasksUseCase: ListEmployeeTasksUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const employeeTasks = await this.listEmployeeTasksUseCase.execute({ id });

        return response.json(employeeTasks);
    }
}