import { PrismaClient } from "@prisma/client";
import { AssignedTask } from "../../entities/AssignedTask";
import { ICreateAssignedTaskDTO, IListAssignedTaskDTO, IAssignedTasksRepository, IListEmployeeTasks } from "../IAssignedTasksRepository";


const prisma = new PrismaClient();

export class AssignedTasksRepository implements IAssignedTasksRepository {
    private Assignedtasks: AssignedTask[];

    public static INSTANCE: AssignedTasksRepository;

    constructor() {
        this.Assignedtasks = [];
    }

    public static getINSTANCE() {
        if (!AssignedTasksRepository.INSTANCE)
            AssignedTasksRepository.INSTANCE = new AssignedTasksRepository();

        return AssignedTasksRepository.INSTANCE;
    }

    public async employeeHaveAssignedTasks(employeeId: string): Promise<boolean> {
        const employeeFound = await prisma.assignedTask.findFirst({
            where: { employeeId }
        });

        return !!employeeFound;
    }

    public async save({ employeeId, description }: ICreateAssignedTaskDTO): Promise<AssignedTask> {
        const AssignedtaskData = await prisma.assignedTask.create({
            data: {
                employeeId,
                description
            }
        })

        return AssignedtaskData;
    }

    public async list(): Promise<IListAssignedTaskDTO[]> {
        const Assignedtasks = await prisma.assignedTask.findMany({
            select: {
                id: true,
                description: true,
                state: true,
                updateAt: true,
                createdAt: true,
                employee: {
                    select: {
                        name: true,
                    }
                }
            }
        });

        return Assignedtasks;
    }

    public async listTasksByEmployee(id: string): Promise<IListEmployeeTasks[]> {
        const employeeTasks = await prisma.assignedTask.findMany({
            where: {
                employeeId: id
            },
            select: {
                id: true,
                description: true,
                state: true,
                updateAt: true,
                createdAt: true,
            }
        });

        return employeeTasks;
    }

    public async delete(id: string): Promise<AssignedTask> {
        const deleteAssignedTask = await prisma.assignedTask.delete({ where: { id } });
        return deleteAssignedTask
    }
}