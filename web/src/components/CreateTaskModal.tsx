import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { Content, Overlay, Title, Close } from '../styles/modalStyles';



export function CreateTaskModal() {
    const [description, setDescription] = useState('')


    async function handleCreateEmployee(event: FormEvent) {
        event.preventDefault();

        try {
            await axios.post("http://localhost:5000/unassignedTasks", {
                description
            })

            setDescription('');
            alert("Tarefa adicionada com sucesso !");

        } catch (err) {
            alert("Erro ao adicionar");
            console.log(err);
        }


    }
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>Adicionar tarefa</Title>
                    <form onSubmit={handleCreateEmployee}>
                        <div>
                            <label htmlFor="description">Descrição*</label>
                            <input
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                id='description'
                                name='description'
                                placeholder="Qual é tarefa"
                            />
                        </div>
                        <div className="options">
                            <Close>Cancelar</Close>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>

    )
}