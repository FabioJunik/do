import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";
import { ListAssignedTasksComtroller } from "./ListAssignedTasksComtroller";
import { ListAssignedTasksUseCase } from "./ListAssignedTasksUseCase";



const assignedtasksRepository = AssignedTasksRepository.getINSTANCE();
const listAssignedTasksUseCase = new ListAssignedTasksUseCase(assignedtasksRepository);
const listAssignedTasksComtroller = new ListAssignedTasksComtroller(listAssignedTasksUseCase);


export { listAssignedTasksComtroller }