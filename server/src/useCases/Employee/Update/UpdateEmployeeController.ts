import { Request, Response } from "express";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";

type EmployeeProps = {
    name: string;
    email: string;
    roleId: string;
}

export class UpdateEmployeeController {
    constructor(private updateEmployeeUseCase: UpdateEmployeeUseCase) { }

    async handle(request: Request, response: Response) {
        const { body } = request;
        const { id } = request.params;

        const obj = Object.fromEntries(Object.entries(body).filter(([_, value]) => !!value));
        obj.id = id;

        console.log("O obj+ ----> ", obj)

        const employeeUpdated = await this.updateEmployeeUseCase.execute(obj);

        return response.status(200).json(employeeUpdated);
    }
}