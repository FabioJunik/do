import { Request, Response } from "express";
import { AuthenticationAdminUseCase } from "./AuthenticationAdminUseCase";


export class AuthenticationAdminController {
    constructor(private authenticationAdminUseCase: AuthenticationAdminUseCase) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const admin = await this.authenticationAdminUseCase.execute({ email, password });

        return response.json(admin);
    }
}