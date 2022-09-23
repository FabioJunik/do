import { UnassignedTasksRepository } from "../../../repositories/implementations/UnassignedTasksRepository";
import { ListUnassignedTasksComtroller } from "./ListUnassignedTasksComtroller";
import { ListUnassignedTasksUseCase } from "./ListUnassignedTasksUseCase";


const UnassignedtasksRepository = UnassignedTasksRepository.getINSTANCE();
const listUnassignedTasksUseCase = new ListUnassignedTasksUseCase(UnassignedtasksRepository);
const listUnassignedTasksComtroller = new ListUnassignedTasksComtroller(listUnassignedTasksUseCase);


export { listUnassignedTasksComtroller }