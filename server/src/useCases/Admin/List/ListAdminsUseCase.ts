import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";


export class ListAdminsUseCase {
    constructor(private AdminsRepository: AdminsRepository) { }

    async execute() {
        const admins = await this.AdminsRepository.list();

        return admins;
    }
}