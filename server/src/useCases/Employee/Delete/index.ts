import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";
import { DeleteEmployeeComtroller } from "./DeleteEmployeeComtroller";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";


const employeesRepository = EmployeesRepository.getINSTANCE();
const deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeesRepository);
const deleteEmployeeComtroller = new DeleteEmployeeComtroller(deleteEmployeeUseCase);


export { deleteEmployeeComtroller }