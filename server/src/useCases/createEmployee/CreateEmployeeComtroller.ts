import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";


export class CreateEmployeeComtroller {
    constructor(private createEmployeeUseCase: CreateEmployeeUseCase) { }

    handle(request: Request, response: Response) {
        const employee = request.body;

        this.createEmployeeUseCase.execute(employee);

        return response.status(201).send();
    }
}