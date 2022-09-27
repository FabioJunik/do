import { Request, Response } from "express";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";



export class UpdateEmployeeController {
    constructor(private updateEmployeeUseCase: UpdateEmployeeUseCase) { }

    async handle(request: Request, response: Response) {
        const { name, roleId, email } = request.body;
        const { id } = request.params;

        const employeeUpdated = await this.updateEmployeeUseCase.execute({ id, name, email, roleId });

        return response.status(204).json(employeeUpdated);
    }
}