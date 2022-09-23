import { UnassignedTasksRepository } from "../../../repositories/implementations/UnassignedTasksRepository";
import { CreateUnassignedTaskComtroller } from "./CreateUnassignedTaskComtroller";
import { CreateUnassignedTaskUseCase } from "./CreateUnassignedTaskUseCase";


const UnassignedtasksRepository = UnassignedTasksRepository.getINSTANCE();
const createUnassignedTaskUseCase = new CreateUnassignedTaskUseCase(UnassignedtasksRepository);
const createUnassignedTaskComtroller = new CreateUnassignedTaskComtroller(createUnassignedTaskUseCase);


export { createUnassignedTaskComtroller }; 