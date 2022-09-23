import { UnassignedTask } from "../entities/UnassignedTask";


interface IUnassignedTasksRepository {
    save: (description: string) => Promise<UnassignedTask>;
    list: () => Promise<UnassignedTask[]>;
}

export { IUnassignedTasksRepository };