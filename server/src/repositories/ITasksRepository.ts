import { Task } from "../entities/Task"


interface ICreateTaskDTO {
    employeeId: string;
    description: string;
    done: string;
}

interface ITaskRepository {
    save: (task: ICreateTaskDTO) => Promise<Task>;
    list: () => Promise<Task[]>;
}

export { ITaskRepository, ICreateTaskDTO };