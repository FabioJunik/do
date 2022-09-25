import { Request, Response } from "express";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";



export class DeleteEmployeeComtroller {
    constructor(private deleteEmployeeUseCase: DeleteEmployeeUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const employeeDeleted = await this.deleteEmployeeUseCase.execute(id);

        return response.status(200).json(employeeDeleted)

    }
}