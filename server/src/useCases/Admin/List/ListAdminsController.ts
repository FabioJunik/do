import { Request, Response } from "express";
import { ListAdminsUseCase } from "./ListAdminsUseCase";


export class ListAdminsController {
    constructor(private listAdminsUseCase: ListAdminsUseCase) { }

    async handle(request: Request, response: Response) {
        const admins = await this.listAdminsUseCase.execute();

        return response.json(admins);
    }
}