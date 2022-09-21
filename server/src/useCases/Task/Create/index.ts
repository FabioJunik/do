import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { CreateTaskComtroller } from "./CreateTaskComtroller";
import { CreateTaskUseCase } from "./CreateTaskUseCase";


const tasksRepository = TasksRepository.getINSTANCE();
const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
const createTaskComtroller = new CreateTaskComtroller(createTaskUseCase);


export { createTaskComtroller }; 