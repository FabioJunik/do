import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Content, Overlay, Title, Close } from '../styles/modalStyles';


interface IRolePros {
    id: string;
    name: string;
}

interface IFormDataProps {
    name: string;
    email: string;
    role: string;
    password: string;
}

export function CreateEmployeesModal() {
    const [role, setRole] = useState<IRolePros[]>([]);
    const [dataForm, setDataForm] = useState<IFormDataProps>({
        name: '',
        email: '',
        role: '',
        password: ''
    })

    useEffect(() => {
        axios("http://localhost:5000/roles")
            .then(response => {
                setRole(response.data);
            })
    }, [])

    async function handleCreateEmployee(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData)

        try {
            await axios.post("http://localhost:5000/employees", {
                name: data.name,
                email: data.email,
                roleId: data.role,
                password: data.password,
                photoUrl: ''
            })

            setDataForm({
                name: '',
                email: '',
                role: '',
                password: ''

            })
            alert("Funcionarios cadastrado com sucesso");

        } catch (err) {
            alert("Erro no cadastro");
            console.log(err);
        }


    }
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>Cadastrar funcionario</Title>
                    <form onSubmit={handleCreateEmployee}>
                        <div>
                            <label htmlFor="name">Nome*</label>
                            <input
                                onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })}
                                value={dataForm.name}
                                id='name'
                                name='name'
                                placeholder="Informe o nome completo"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail*</label>
                            <input
                                onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })}
                                value={dataForm.email}
                                id='email'
                                name='email'
                                placeholder="user@mail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Palavra Passe</label>
                            <input
                                onChange={(e) => setDataForm({ ...dataForm, password: e.target.value })}
                                value={dataForm.password}
                                id='password'
                                name='password'
                                type='password'
                                placeholder="Tua senha"
                            />
                        </div>
                        <div>
                            <label htmlFor="role">Cargo*</label>
                            <select id='role' name='role' defaultValue=''>
                                <option disabled selected>O funcionario exerce a função de ?</option>
                                {role.map(({ id, name }) => (
                                    <option value={id} key={id}>{name}</option>
                                ))}
                            </select>
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