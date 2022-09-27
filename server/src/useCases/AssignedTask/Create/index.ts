import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";
import { CreateAssignedTaskComtroller } from "./CreateAssignedTaskComtroller";
import { CreateAssignedTaskUseCase } from "./CreateAssignedTaskUseCase";


const assignedtasksRepository = AssignedTasksRepository.getINSTANCE();
const createAssignedTaskUseCase = new CreateAssignedTaskUseCase(assignedtasksRepository);
const createAssignedTaskComtroller = new CreateAssignedTaskComtroller(createAssignedTaskUseCase);


export { createAssignedTaskComtroller }; 