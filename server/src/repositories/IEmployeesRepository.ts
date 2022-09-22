import { Employee } from "../entities/Employee";

interface ICreateEmployeeDTO {
    roleId: string;
    name: string;
    email: string;
    password: string;
    photoUrl: string;
}

interface IEmployeesRepository {
    findById: (id: string) => Promise<Employee>;
    findByEmail: (email: string) => Promise<Employee>;
    list: () => Promise<{}[]>;
    save: (employee: ICreateEmployeeDTO) => Promise<Employee>
}

export { IEmployeesRepository, ICreateEmployeeDTO }