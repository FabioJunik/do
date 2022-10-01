import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    password: string;
    photoUrl: string;
}


export class UpdateAdminUseCase {
    constructor(private adminsRepository: AdminsRepository) { }

    async execute(admin: Partial<IRequest>) {
        const AdminFound = await this.adminsRepository.findById(admin.id);

        if (!AdminFound)
            throw new Error("Admin not found");

        const AdminUpdated = await this.adminsRepository.update(admin);

        return AdminUpdated;
    }
}