import { Request, Response } from "express"
import { ListRolesUseCase } from "./ListRolesUseCase";



export class ListRolesComtroller {
    constructor(private listRolesUseCase: ListRolesUseCase) { }

    async handle(reqeuest: Request, response: Response) {

        const roles = await this.listRolesUseCase.execute();

        return response.json(roles);
    }
}