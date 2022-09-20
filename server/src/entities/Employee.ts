import { v4 as uuid } from "uuid"

export class Employee {
    public readonly id: string;

    public roleId: string;
    public name: string;
    public email: string;
    public password: string;
    public photoUrl: string;

    constructor(props: Omit<Employee, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}