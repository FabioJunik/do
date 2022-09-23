import axios from "axios";
import { PencilSimpleLine, Trash } from "phosphor-react";
import { useEffect, useState } from "react";


interface IEmployeeProps {
    id: string;
    name: string;
    email: string;
    role: {
        name: string;
    }
}

export function EmployeeTable() {
    const [employee, setEmployee] = useState<IEmployeeProps[]>([]);

    useEffect(() => {
        axios("http://localhost:5000/employees")
            .then(response => {
                setEmployee(response.data)
            })
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Cargo</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {employee && employee.map(({ id, name, role, email }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{role.name}</td>
                        <td>
                            <PencilSimpleLine color="var(--green-700)" />
                            <Trash color="var(--red-600)" />
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}