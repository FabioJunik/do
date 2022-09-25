import { Request, Response } from "express";
import { ListEmployeesUseCase } from "./ListEmployeesUseCase";


export class ListEmployeesComtroller {
    constructor(private listEmployeesUseCase: ListEmployeesUseCase) { }

    async handle(request: Request, response: Response) {
        const employees = await this.listEmployeesUseCase.execute();

        return response.json(employees);
    }
}