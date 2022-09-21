import { Task } from "../../entities/Task";
import { ICreateTaskDTO, ITaskRepository } from "../ITasksRepository";



export class TaskRepository implements ITaskRepository {
    private tasks: Task[];

    public static INSTANCE: TaskRepository;

    constructor() {
        this.tasks = [];
    }

    public static getINSTANCE() {
        if (!TaskRepository.INSTANCE)
            TaskRepository.INSTANCE = new TaskRepository();

        return TaskRepository.INSTANCE;
    }

    public async save(task: ICreateTaskDTO): Promise<Task> {
        return
    }

    public async list(): Promise<Task[]> {
        return
    }
}