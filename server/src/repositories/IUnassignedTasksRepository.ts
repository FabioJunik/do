import { UnassignedTask } from "../entities/UnassignedTask";


interface IUnassignedTasksRepository {
    save: (description: string) => Promise<UnassignedTask>;
    list: () => Promise<UnassignedTask[]>;
    delete: (id: string) => Promise<UnassignedTask>;
}

export { IUnassignedTasksRepository };