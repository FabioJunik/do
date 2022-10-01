import { Request, Response } from "express";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";

type AdminProps = {
    name: string;
    email: string;
    roleId: string;
}

export class UpdateAdminController {
    constructor(private updateAdminUseCase: UpdateAdminUseCase) { }

    async handle(request: Request, response: Response) {
        const { body } = request;
        const { id } = request.params;

        const adminValuesRecive = Object.fromEntries(Object.entries(body).filter(([key, value]) => !!value));
        adminValuesRecive.id = id;


        const AdminUpdated = await this.updateAdminUseCase.execute(adminValuesRecive);

        return response.json(AdminUpdated);
    }
}