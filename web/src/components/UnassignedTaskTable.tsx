import axios from "axios";
import { PencilSimpleLine, Trash } from "phosphor-react";
import { useEffect, useState } from "react";


interface IUnassignedTaskProps {
    id: string;
    description: string;
    createdAt: Date;
}

export function UnassignedTaskTable() {
    const [unassigned, setUnassigned] = useState<IUnassignedTaskProps[]>([]);

    useEffect(() => {
        axios("http://localhost:5000/unassignedtasks")
            .then(response => {
                setUnassigned(response.data)
            })
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Atribuida em ...</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {unassigned && unassigned.map(({ id, description, createdAt }) => (
                    <tr key={id}>
                        <td>{description}</td>
                        <td>{createdAt.toString().substring(0, 10)} às {createdAt.toString().substring(11, 16)}</td>
                        <td>
                            <button>Atribuir</button>
                            <button className="remove">Remover</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}