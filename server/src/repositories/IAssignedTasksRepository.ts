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

type IListEmployeeTasks = Omit<IListAssignedTaskDTO, "employee">;

interface IAssignedTasksRepository {
    employeeHaveAssignedTasks: (id: string) => Promise<boolean>;
    save: (Assignedtask: ICreateAssignedTaskDTO) => Promise<AssignedTask>;
    list: () => Promise<IListAssignedTaskDTO[]>;
    listTasksByEmployee: (id: string) => Promise<IListEmployeeTasks[]>;
    delete: (id: string) => Promise<AssignedTask>;
}

export { IAssignedTasksRepository, ICreateAssignedTaskDTO, IListAssignedTaskDTO, IListEmployeeTasks };