import { Request, Response } from "express";
import { AuthenticationEmployeeUseCase } from "./AuthenticationEmployeeUseCase";


export class AuthenticationEmployeeComtroller {
    constructor(private authenticationEmployeeUseCase: AuthenticationEmployeeUseCase) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const employee = await this.authenticationEmployeeUseCase.execute({ email, password });

        return response.json(employee);
    }
}