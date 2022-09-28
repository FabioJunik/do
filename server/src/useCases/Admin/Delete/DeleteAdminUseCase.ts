import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";



export class DeleteAdminUseCase {
    constructor(private adminsRepository: AdminsRepository) { }

    async execute(id: string) {

        const adminFound = await this.adminsRepository.findById(id);

        if (!adminFound)
            throw new Error("Admin not found");

        const adminDeleted = await this.adminsRepository.delete(id);
        return adminDeleted
    }
}