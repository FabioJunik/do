import { IEmployeesRepository } from "../../../repositories/IEmployeesRepository";

interface IRequest {
    roleId: string;
    name: string;
    email: string;
    password: string;
}

export class CreateEmployeeUseCase {
    constructor(private employeeRepository: IEmployeesRepository) { }

    async execute({ name, email, password, roleId }: IRequest) {

        const emptyField = name && email;

        if (!emptyField) {
            throw new Error("Fill in all mandatory fields")
        }

        const employeeFound = await this.employeeRepository.findByEmail(email);

        if (employeeFound)
            throw new Error("Employee already exists")

        this.employeeRepository.save({ name, email, password, roleId });

    }
}