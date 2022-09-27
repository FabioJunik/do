import { FormEvent, useEffect, useState } from 'react';
import { api } from '../service/api';

import * as Dialog from '@radix-ui/react-dialog';
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

interface IUpdateProps {
    id: string;
    name: string;
    email: string;
    roleId: string;
}

export function UpdateEmployeeModal({ id, name, email, roleId }: IUpdateProps) {
    const [role, setRole] = useState<IRolePros[]>([]);
    const [error, setError] = useState('');
    const [dataForm, setDataForm] = useState<IFormDataProps>({
        name: '',
        email: '',
        role: '',
        password: ''
    })

    useEffect(() => {
        api.get("/roles")
            .then(response => {
                setRole(response.data);
            })
    }, [])

    async function handleCreateEmployee(event: FormEvent) {
        event.preventDefault();

        const { name, email, password, role: roleId } = dataForm;

        console.log(roleId);

        const emptyField = name && email && roleId;

        if (!emptyField) {
            setError('Preencha todos os campos obrigatorios')
            return
        }

        try {
            await api.put("/employees", {
                name,
                email,
                roleId,
                password,
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
                                type="email"
                                id='email'
                                name='email'
                                placeholder="user@mail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="role">Cargo*</label>
                            <select
                                id='role'
                                name='role'
                                defaultValue=''
                                onChange={(e) => setDataForm({ ...dataForm, role: e.target.value })}
                            >
                                <option disabled selected>O funcionario exerce a função de ?</option>
                                {role.map(({ id, name }) => (
                                    <option value={id} key={id}>{name}</option>
                                ))}
                            </select>
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
                        <p className='error'>{error}</p>
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