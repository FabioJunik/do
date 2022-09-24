import axios from "axios";
import { PencilSimpleLine, Trash } from "phosphor-react";
import { useEffect, useState } from "react";


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
                            <Trash onClick={() => deleteAssignedTask(id)} color="var(--red-600)" />
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}