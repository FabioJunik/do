import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { DeleteTaskComtroller } from "./DeleteTaskComtroller";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";


const tasksRepository = TasksRepository.getINSTANCE();
const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);
const deleteTaskComtroller = new DeleteTaskComtroller(deleteTaskUseCase);


export { deleteTaskComtroller }