import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import { CreateEmployeeComtroller } from "./CreateEmployeeComtroller";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";


const employeeRepository = EmployeesRepository.getINSTANCE();
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const createEmployeeComtroller = new CreateEmployeeComtroller(createEmployeeUseCase);


export { createEmployeeComtroller };