import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToAssignTaskModal } from "./ToAssignTaskModal";


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

    function deleteUnassignedTask(id: string) {
        try {
            axios.delete(`http://localhost:5000/unassignedtasks/${id}`)
            setUnassigned(unassigned.filter(task => task.id === id));
        } catch (err) {
            alert("Erro ao remover tarefa")
        }
    }

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
                            <Dialog.Root>
                                <Dialog.Trigger title="Adicionar tarefa">
                                    Atribuir
                                </Dialog.Trigger>
                                <ToAssignTaskModal id={id} description={description} />
                            </Dialog.Root>
                            <button
                                className="remove"
                                onClick={() => deleteUnassignedTask(id)}
                            >
                                Remover
                            </button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}