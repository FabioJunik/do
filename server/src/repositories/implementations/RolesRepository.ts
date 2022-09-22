import { PrismaClient } from "@prisma/client";
import { Role } from "../../entities/Role";
import { IRolesRepository } from "../IRolesRepository";


const prisma = new PrismaClient();

export class RolesRepository implements IRolesRepository {
    private roles: Role[];

    public static INSTANCE: RolesRepository;

    constructor() {
        this.roles = []
    }

    public static getINSTANCE() {
        if (!RolesRepository.INSTANCE)
            RolesRepository.INSTANCE = new RolesRepository();

        return RolesRepository.INSTANCE;
    }

    async save(name: string): Promise<Role> {
        return
    }

    async list(): Promise<Role[]> {
        this.roles = await prisma.role.findMany();

        return this.roles;
    }
}