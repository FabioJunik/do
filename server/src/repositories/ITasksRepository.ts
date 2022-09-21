import { Task } from "../entities/Task"


interface ICreateTaskDTO {
    employeeId: string;
    description: string;
}

interface ITasksRepository {
    save: (task: ICreateTaskDTO) => Promise<Task>;
    list: () => Promise<Task[]>;
}

export { ITasksRepository, ICreateTaskDTO };