import { v4 as uuid } from "uuid";

export class AssignedTask {
    public readonly id: string;

    public employeeId: string;
    public description: string;
    public state: string;
    public updateAt: Date;
    public createdAt: Date;


    constructor(props: Omit<AssignedTask, "id">, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid();
    }

}