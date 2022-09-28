import { Admin } from "../entities/Admin";

interface ICreateAdminDTO {
    name: string;
    email: string;
    password: string;
}

type IUpdateAdminDTO = ICreateAdminDTO & {
    id: string;
};

type ListAdminProps = Omit<Admin, "password">

interface IAdminsRepository {
    findById: (id: string) => Promise<Admin>;
    findByEmail: (email: string) => Promise<Admin>;
    list: () => Promise<ListAdminProps[]>;
    save: (admin: ICreateAdminDTO) => Promise<Admin>
    delete: (id: string) => Promise<Admin>;
    update: (admin: IUpdateAdminDTO) => Promise<Admin>;
}

export { IAdminsRepository, ICreateAdminDTO, ListAdminProps, IUpdateAdminDTO }