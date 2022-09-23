import { Task } from "../entities/Task"


interface ICreateTaskDTO {
    employeeId: string;
    description: string;
}

interface IListTaskDTO {
    id: string;
    description: string;
    done: boolean;
    createdAt: Date;
    employee: {
        name: string;
    }
}

interface ITasksRepository {
    save: (task: ICreateTaskDTO) => Promise<Task>;
    list: () => Promise<IListTaskDTO[]>;
}

export { ITasksRepository, ICreateTaskDTO, IListTaskDTO };