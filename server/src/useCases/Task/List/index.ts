import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { ListTasksComtroller } from "./ListTasksComtroller";
import { ListTasksUseCase } from "./ListTasksUseCase";



const tasksRepository = TasksRepository.getINSTANCE();
const listTasksUseCase = new ListTasksUseCase(tasksRepository);
const listTasksComtroller = new ListTasksComtroller(listTasksUseCase);


export { listTasksComtroller }