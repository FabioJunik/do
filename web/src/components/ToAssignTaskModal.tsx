import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Content, Overlay, Title, Close } from '../styles/modalStyles';

interface IAssignTaskProps {
    description: string;
}


export function ToAssignTaskModal({ description }: IAssignTaskProps) {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios("http://localhost:5000/employees")
            .then(response => {
                setEmployee(response.data);
            })
    }, [])

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>Atribuir tarefa</Title>
                    <form>
                        <div>
                            <label htmlFor="role">Funcionario*</label>
                            <select id='role' name='role' defaultValue=''>
                                <option disabled selected>A tarefa sera atribuida à ...</option>
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