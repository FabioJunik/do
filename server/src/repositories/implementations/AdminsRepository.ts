import { PrismaClient } from "@prisma/client";
import { Admin } from "../../entities/Admin";
import { ICreateAdminDTO, IAdminsRepository, IUpdateAdminDTO, ListAdminProps } from "../IAdminsRepository";

const prisma = new PrismaClient();

export class AdminsRepository implements IAdminsRepository {
    private admins: Admin[];

    private static INSTANCE: AdminsRepository;

    private constructor() {
        this.admins = [];
    }

    public static getINSTANCE(): AdminsRepository {
        if (!AdminsRepository.INSTANCE)
            AdminsRepository.INSTANCE = new AdminsRepository();

        return AdminsRepository.INSTANCE;
    }

    public async list(): Promise<ListAdminProps[]> {
        return;
    }

    public async save(admin: ICreateAdminDTO): Promise<Admin> {
        const adminData = await prisma.admin.create({
            data: {
                name: admin.name,
                email: admin.email,
                password: admin.password,
                photoUrl: "./tmp/uploads/avatar/avatar_default.png"
            }
        })

        return adminData;
    }

    public async findByEmail(email: string): Promise<Admin> {
        return;
    };

    public async findById(id: string): Promise<Admin> {
        return;
    };

    public async delete(id: string): Promise<Admin> {
        return;
    };

    public async update(Admin: IUpdateAdminDTO): Promise<Admin> {
        return;
    }
}