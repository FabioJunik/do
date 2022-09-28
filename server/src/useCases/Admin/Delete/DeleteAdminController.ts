import { Request, Response } from "express";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";



export class DeleteAdminController {
    constructor(private deleteAdminUseCase: DeleteAdminUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const adminDeleted = await this.deleteAdminUseCase.execute(id);

        return response.status(200).json(adminDeleted)

    }
}