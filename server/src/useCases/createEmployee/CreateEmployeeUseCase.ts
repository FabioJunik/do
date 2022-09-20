import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

interface IRequest {
    roleId: string;
    name: string;
    email: string;
    password: string;
    photoUrl: string;
}

export class CreateEmployeeUseCase {
    constructor(private employeeRepository: IEmployeesRepository) { }

    execute(employee: IRequest) {
        this.employeeRepository.save(employee);
    }
}