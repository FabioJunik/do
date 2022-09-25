import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";
import { ListEmployeesUseCase } from "./ListEmployeesUseCase";
import { ListEmployeesComtroller } from "./ListEmployessComtroller";


const employeesRepository = EmployeesRepository.getINSTANCE();
const listEmployeesUseCase = new ListEmployeesUseCase(employeesRepository);
const listEmployeesComtroller = new ListEmployeesComtroller(listEmployeesUseCase);


export { listEmployeesComtroller }