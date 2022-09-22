import { v4 as uuid } from "uuid";


export class Role {
    public readonly id: string;

    public name: string;

    constructor(props: Omit<Role, "id">, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid();
    }
}