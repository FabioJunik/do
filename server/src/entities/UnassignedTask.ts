import { v4 as uuid } from "uuid";

export class UnassignedTask {
    public readonly id: string;

    public description: string;
    public createdAt: Date;

    constructor(props: Omit<UnassignedTask, "id">, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid();
    }

}