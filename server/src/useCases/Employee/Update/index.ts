import { EmployeesRepository } from "../../../repositories/implementations/EmployeesRepository";
import { UpdateEmployeeController } from "./UpdateEmployeeController";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";

const employeesRepository = EmployeesRepository.getINSTANCE();
const updateEmployeeUseCase = new UpdateEmployeeUseCase(employeesRepository);
const updateEmployeeController = new UpdateEmployeeController(updateEmployeeUseCase);

export { updateEmployeeController };