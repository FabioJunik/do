import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";
import { DeleteAssignedTaskComtroller } from "./DeleteAssignedTaskComtroller";
import { DeleteAssignedTaskUseCase } from "./DeleteAssignedTaskUseCase";


const assignedtasksRepository = AssignedTasksRepository.getINSTANCE();
const deleteAssignedTaskUseCase = new DeleteAssignedTaskUseCase(assignedtasksRepository);
const deleteAssignedTaskComtroller = new DeleteAssignedTaskComtroller(deleteAssignedTaskUseCase);


export { deleteAssignedTaskComtroller }