import jwt from "jsonwebtoken";
import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";
import { IAuthenticateEmployeeDTO } from "./IAuthenticateEmployeeDTO";


export class AuthenticationEmployeeUseCase {
    constructor(private employeesRepository: EmployeesRepository) { }

    async execute({ email, password }: IAuthenticateEmployeeDTO) {
        const employee = await this.employeesRepository.findByEmail(email);

        if (!employee)
            throw new Error("Email or password does not match");

        if (password !== employee.password)
            throw new Error("Email or password does not match");

        const token = jwt.sign({ id: employee.id }, "321e61c589079ea0fe776cc96eaa7fc7", {
            subject: employee.id,
            expiresIn: "1d"
        })

        return token;

    }
}