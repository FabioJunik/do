import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";


export class CreateAdminController {
    constructor(private createAdminUseCase: CreateAdminUseCase) { }

    async handle(request: Request, response: Response) {
        const admin = request.body;

        await this.createAdminUseCase.execute(admin);

        return response.status(201).send();
    }
}