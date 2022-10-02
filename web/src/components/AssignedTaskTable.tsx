import { useEffect, useState } from "react";
import { api } from "../service/api";

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { toast } from 'react-toastify';
import { PencilSimpleLine, Trash } from "phosphor-react";

import { AlertModal } from "./AlertModal";
import { AlertTrigger } from "../styles/alertModalStyles";


interface ITaskProps {
    id: string;
    description: string;
    state: string;
    updatedAt: Date;
    createdAt: Date;
    employee: {
        name: string;
    }
}

export function AssignedTaskTable() {
    const [employee, setEmployee] = useState<ITaskProps[]>([]);

    useEffect(() => {
        api.get("/assignedtasks")
            .then(response => {
                setEmployee(response.data)
            })
    }, []);

    function deleteAssignedTask(id: string) {
        try {
            api.delete(`/assignedtasks/${id}`)
            setEmployee(employee.filter(task => task.id !== id));
            toast.success("Tarefa eliminada com sucesso !")
        } catch (err: any) {
            toast.error(err.response.data.error)
            console.log(err);
        }

    }

    console.log(employee)
    return (
        <table>
            <thead>
                <tr>
                    <th>Funcionario</th>
                    <th>Tarefa</th>
                    <th>Estado</th>
                    <th>Atribuida em ...</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {employee && employee.map(({ id, description, employee, state, createdAt }) => (
                    <tr key={id}>
                        <td>{employee.name}</td>
                        <td>{description}</td>
                        <td>
                            <span className={state}>
                                {state === "pending" && 'Processando'}
                                {state === "done" && 'Finalizada'}
                                {state === "undone" && 'Não finalizada'}
                            </span>
                        </td>
                        <td>{createdAt.toString().substring(0, 10)} às {createdAt.toString().substring(11, 16)}</td>
                        <td>
                            <PencilSimpleLine color="var(--green-700)" />
                            <AlertDialog.Root>
                                <AlertTrigger>
                                    <Trash
                                        color="var(--red-600)"
                                    />
                                </AlertTrigger>
                                <AlertModal
                                    deleteId={id}
                                    title="Eliminar tarefa"
                                    description="A está ação é inrevercivel deseja continuar ?"
                                    handleDelete={deleteAssignedTask}
                                />
                            </AlertDialog.Root>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}