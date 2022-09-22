import { RolesRepository } from "../../../repositories/implementations/RolesRepository";


export class ListRolesUseCase {
    constructor(private rolesRepository: RolesRepository) { }

    async execute() {
        const roles = this.rolesRepository.list();

        return roles;
    }
}