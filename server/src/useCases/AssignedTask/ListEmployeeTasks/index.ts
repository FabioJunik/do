import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";
import { ListEmployeeTasksComtroller } from "./ListEmployeeTasksController";
import { ListEmployeeTasksUseCase } from "./ListEmployeeTasksUseCase";



const assignedtasksRepository = AssignedTasksRepository.getINSTANCE();
const listEmployeeTasksUseCase = new ListEmployeeTasksUseCase(assignedtasksRepository);
const listEmployeeTasksComtroller = new ListEmployeeTasksComtroller(listEmployeeTasksUseCase);


export { listEmployeeTasksComtroller }