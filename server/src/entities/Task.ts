import { v4 as uuid } from "uuid";

export class Task {
    public readonly id: string;

    public employeeId: string;
    public description: string;
    public done: string;
    public createdAt: string;


    constructor(props: Omit<Task, "id">, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid();
    }

}