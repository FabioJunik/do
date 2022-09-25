import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";
import { AuthenticationEmployeeComtroller } from "./AuthenticationEmployeeComtroller";
import { AuthenticationEmployeeUseCase } from "./AuthenticationEmployeeUseCase";

const employeesRepository = EmployeesRepository.getINSTANCE();
const createEmployeeUseCase = new AuthenticationEmployeeUseCase(employeesRepository);
const authenticationEmployeeComtroller = new AuthenticationEmployeeComtroller(createEmployeeUseCase);


export { authenticationEmployeeComtroller };