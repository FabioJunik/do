import { useEffect, useState } from "react";
import { api } from "../service/api";

import * as  AlertDialog from "@radix-ui/react-alert-dialog";
import { PencilSimpleLine, Trash } from "phosphor-react";

import { AlertTrigger } from "../styles/alertModalStyles";
import { AlertModal } from "./AlertModal";


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
        api.get("/employees")
            .then(response => {
                setEmployee(response.data)
            })
    }, []);

    function deleteEmployee(id: string) {
        try {
            api.delete(`/employees/${id}`)
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

                            <AlertDialog.Root>
                                <AlertTrigger>
                                    <Trash
                                        color="var(--red-600)"
                                    />
                                </AlertTrigger>
                                <AlertModal
                                    deleteId={id}
                                    title="Eliminar Funcionário"
                                    description="A está ação é inrevercivel deseja continuar ?"
                                    handleDelete={deleteEmployee}
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