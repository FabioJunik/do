import { AssignedTask } from "../entities/AssignedTask"


interface ICreateAssignedTaskDTO {
    employeeId: string;
    description: string;
}

interface IListAssignedTaskDTO {
    id: string;
    description: string;
    state: string,
    updateAt: Date,
    createdAt: Date;
    employee: {
        name: string;
    }
}

interface IAssignedTasksRepository {
    save: (Assignedtask: ICreateAssignedTaskDTO) => Promise<AssignedTask>;
    list: () => Promise<IListAssignedTaskDTO[]>;
    delete: (id: string) => Promise<AssignedTask>;
}

export { IAssignedTasksRepository, ICreateAssignedTaskDTO, IListAssignedTaskDTO };