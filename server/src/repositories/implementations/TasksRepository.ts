import { PrismaClient } from "@prisma/client";
import { Task } from "../../entities/Task";
import { ICreateTaskDTO, ITasksRepository } from "../ITasksRepository";


const prisma = new PrismaClient();

export class TasksRepository implements ITasksRepository {
    private tasks: Task[];

    public static INSTANCE: TasksRepository;

    constructor() {
        this.tasks = [];
    }

    public static getINSTANCE() {
        if (!TasksRepository.INSTANCE)
            TasksRepository.INSTANCE = new TasksRepository();

        return TasksRepository.INSTANCE;
    }

    public async save({ employeeId, description }: ICreateTaskDTO): Promise<Task> {
        const taskData = await prisma.task.create({
            data: {
                employeeId,
                description
            }
        })

        return taskData;
    }

    public async list(): Promise<Task[]> {
        return
    }
}