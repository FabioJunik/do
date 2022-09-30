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
        const admins = await prisma.admin.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                photoUrl: true,
            },
        });

        return admins;
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
        const admin = await prisma.admin.findFirst({
            where: { email }
        })
        return admin;
    };

    public async findById(id: string): Promise<Admin> {
        const admin = await prisma.admin.findUnique({
            where: { id }
        })
        return admin;
    };

    public async delete(id: string): Promise<Admin> {
        const admin = await prisma.admin.delete({ where: { id } })

        return admin;
    };

    public async update(Admin: IUpdateAdminDTO): Promise<Admin> {
        return;
    }
}