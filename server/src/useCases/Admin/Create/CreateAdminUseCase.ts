import { IAdminsRepository } from "../../../repositories/IAdminsRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

export class CreateAdminUseCase {
    constructor(private AdminRepository: IAdminsRepository) { }

    async execute({ name, email, password }: IRequest) {

        const emptyField = name && email;

        if (!password) password = "12bc34de";

        if (!emptyField) {
            throw new Error("Fill in all mandatory fields")
        }

        const AdminFound = await this.AdminRepository.findByEmail(email);

        if (AdminFound)
            throw new Error("Admin already exists")

        this.AdminRepository.save({ name, email, password });

    }
}