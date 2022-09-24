import { PrismaClient } from "@prisma/client";
import { Task } from "../../entities/Task";
import { UnassignedTask } from "../../entities/UnassignedTask";
import { IUnassignedTasksRepository } from "../IUnassignedTasksRepository";


const prisma = new PrismaClient();

export class UnassignedTasksRepository implements IUnassignedTasksRepository {
    private tasks: Task[];

    public static INSTANCE: UnassignedTasksRepository;

    constructor() {
        this.tasks = [];
    }

    public static getINSTANCE() {
        if (!UnassignedTasksRepository.INSTANCE)
            UnassignedTasksRepository.INSTANCE = new UnassignedTasksRepository();

        return UnassignedTasksRepository.INSTANCE;
    }

    public async save(description: string): Promise<UnassignedTask> {
        const taskData = await prisma.unassignedTask.create({
            data: {
                description
            }
        })

        return taskData;
    }

    public async list(): Promise<UnassignedTask[]> {
        const tasks = await prisma.unassignedTask.findMany();
        return tasks;
    }

    public async delete(id: string): Promise<UnassignedTask> {
        const deleteTask = await prisma.unassignedTask.delete({ where: { id } });
        return deleteTask
    }
}