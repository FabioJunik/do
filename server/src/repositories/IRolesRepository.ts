import { Role } from "../entities/Role";


export interface IRolesRepository {
    save: (name: string) => Promise<Role>;
    list: () => Promise<Role[]>
}
