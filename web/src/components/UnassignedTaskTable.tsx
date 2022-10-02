import { useEffect, useState } from "react";
import { api } from "../service/api";

import { toast } from 'react-toastify';
import * as Dialog from "@radix-ui/react-dialog";

import { ToAssignTaskModal } from "./ToAssignTaskModal";


interface IUnassignedTaskProps {
    id: string;
    description: string;
    createdAt: Date;
}

export function UnassignedTaskTable() {
    const [unassigned, setUnassigned] = useState<IUnassignedTaskProps[]>([]);

    useEffect(() => {
        api.get("/unassignedtasks")
            .then(response => {
                setUnassigned(response.data)
            })
    }, []);

    function deleteUnassignedTask(id: string) {
        try {
            api.delete(`/unassignedtasks/${id}`)
            setUnassigned(unassigned.filter(task => task.id === id));

            toast.success("Tarefa eliminada com sucesso !");

        } catch (err: any) {
            toast.error(err.response.data.error)
            console.log(err);
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
                        <td className="optionsButton">
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