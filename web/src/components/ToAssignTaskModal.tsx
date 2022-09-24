import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Content, Overlay, Title, Close } from '../styles/modalStyles';

interface IAssignTaskProps {
    id: string;
    description: string;
}

export function ToAssignTaskModal({ id, description }: IAssignTaskProps) {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios("http://localhost:5000/employees")
            .then(response => {
                setEmployee(response.data);
            })
    }, [])

    async function handleToAssignedTask(event: FormEvent) {

        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData)

        try {

            await axios.post("http://localhost:5000/tasks", {
                employeeId: data.employee,
                description
            });

            axios.delete(`http://localhost:5000/unassignedtasks/${id}`)

            console.log(data.employee)
            alert("Tarefa atribuida com sucesso !");
        } catch (err) {
            console.log(err)
            alert("Erro ao atribuir a tarefa!")
        }

    }

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>Atribuir tarefa</Title>
                    <form onSubmit={handleToAssignedTask}>
                        <div>
                            <label htmlFor="employee">Funcionario*</label>
                            <select id='employee' name='employee' defaultValue=''>
                                <option disabled selected value="">A tarefa sera atribuida à ...</option>
                                {employee && employee.map(({ id, name }) => (
                                    <option value={id} key={id}>{name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="options">
                            <Close>Cancelar</Close>
                            <button type="submit">Atribuir</button>
                        </div>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>

    )
}