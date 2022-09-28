import { v4 as uuid } from "uuid"

export class Admin {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;
    public photoUrl: string;

    constructor(props: Omit<Admin, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}