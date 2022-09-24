import { UnassignedTasksRepository } from "../../../repositories/implementations/UnassignedTasksRepository";
import { DeleteUnassignedTaskComtroller } from "./DeleteUnassignedTaskComtroller";
import { DeleteUnassignedTaskUseCase } from "./DeleteUnassignedTaskUseCase";


const UnassignedtasksRepository = UnassignedTasksRepository.getINSTANCE();
const deleteUnassignedTaskUseCase = new DeleteUnassignedTaskUseCase(UnassignedtasksRepository);
const deleteUnassignedTaskComtroller = new DeleteUnassignedTaskComtroller(deleteUnassignedTaskUseCase);


export { deleteUnassignedTaskComtroller }