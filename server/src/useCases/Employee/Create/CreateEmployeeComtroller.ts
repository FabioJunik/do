import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";


export class CreateEmployeeComtroller {
    constructor(private createEmployeeUseCase: CreateEmployeeUseCase) { }

    async handle(request: Request, response: Response) {
        const employee = request.body;

        await this.createEmployeeUseCase.execute(employee);

        return response.status(201).send();
    }
}