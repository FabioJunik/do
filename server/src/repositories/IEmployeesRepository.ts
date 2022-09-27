import { Employee } from "../entities/Employee";

interface ICreateEmployeeDTO {
    roleId: string;
    name: string;
    email: string;
    password: string;
}

type IUpdateEmployeeDTO = ICreateEmployeeDTO & {
    id: string;
};

type ListEmployeeProps = Omit<Employee, "roleId" | "password"> & {
    role: {
        name: string;
    }
}

interface IEmployeesRepository {
    findById: (id: string) => Promise<Employee>;
    findByEmail: (email: string) => Promise<Employee>;
    list: () => Promise<ListEmployeeProps[]>;
    save: (employee: ICreateEmployeeDTO) => Promise<Employee>
    delete: (id: string) => Promise<Employee>;
    update: (employee: IUpdateEmployeeDTO) => Promise<Employee>;
}

export { IEmployeesRepository, ICreateEmployeeDTO, ListEmployeeProps, IUpdateEmployeeDTO }