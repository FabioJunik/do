import { useEffect, useState } from "react";
import axios from "axios";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { PencilSimpleLine, Trash } from "phosphor-react";
import { AlertModal } from "./AlertModal";
import { AlertTrigger } from "../styles/alertModalStyles";


interface ITaskProps {
    id: string;
    description: string;
    done: boolean;
    createdAt: Date;
    employee: {
        name: string;
    }
}

export function AssignedTaskTable() {
    const [employee, setEmployee] = useState<ITaskProps[]>([]);

    useEffect(() => {
        axios("http://localhost:5000/tasks")
            .then(response => {
                setEmployee(response.data)
            })
    }, []);

    function deleteAssignedTask(id: string) {
        try {
            axios.delete(`http://localhost:5000/tasks/${id}`)
            setEmployee(employee.filter(task => task.id !== id));
        } catch (err) {
            alert("Erro ao remover tarefa");
            console.log(err);
        }

    }
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
                {employee && employee.map(({ id, description, employee, done, createdAt }) => (
                    <tr key={id}>
                        <td>{employee.name}</td>
                        <td>{description}</td>
                        <td>{done ?
                            <span className='done'>Finalizada</span> :
                            <span className='processing'>Processando</span>}
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