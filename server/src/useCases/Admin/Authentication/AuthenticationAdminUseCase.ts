import jwt from "jsonwebtoken";
import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";
import { IAuthenticateAdminDTO } from "./IAuthenticateAdminDTO";


export class AuthenticationAdminUseCase {
    constructor(private adminsRepository: AdminsRepository) { }

    async execute({ email, password }: IAuthenticateAdminDTO) {
        const admin = await this.adminsRepository.findByEmail(email);

        if (!admin)
            throw new Error("Email or password does not match");

        if (password !== admin.password)
            throw new Error("Email or password does not match");

        const token = jwt.sign({ id: admin.id }, "321e61c589079ea0fe776cc96eaa7fc7", {
            subject: admin.id,
            expiresIn: "1d"
        })

        return {
            token,
            admin
        };

    }
}