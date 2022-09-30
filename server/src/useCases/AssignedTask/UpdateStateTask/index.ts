import { AssignedTasksRepository } from "../../../repositories/implementations/AssignedTasksRepository";
import { UpdateStateTaskController } from "./UpdateStateTaskController";
import { UpdateStateTaskTaskUseCase } from "./UpdateStateTaskUseCase";


const assignedtasksRepository = AssignedTasksRepository.getINSTANCE();
const updateStateTaskTaskUseCase = new UpdateStateTaskTaskUseCase(assignedtasksRepository);
const updateStateTaskController = new UpdateStateTaskController(updateStateTaskTaskUseCase);


export { updateStateTaskController }; 