import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { api } from '../service/api';

import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, Title, Close } from '../styles/modalStyles';
import { Password } from 'phosphor-react';
import { AuthContext } from '../contexts/AuthContext';



interface IUserProps {
    id: string;
    name: string;
    photoUrl: string;
    password: string;
    email: string;
    roleId: string;
}


export function EditeProfileEmployeeModal() {
    const [error, setError] = useState('');

    const { user: User } = useContext(AuthContext);
    const user = User as IUserProps;

    const [password, setPassword] = useState(user.password);
    let file: File;


    async function handleUpdateData(event: FormEvent) {
        event.preventDefault();

        if (!password) {
            setError('A password não pode estar vazia')
            return
        }

        const formData = new FormData();
        formData.append('avatar', file);

        try {
            await api.post(`/uploads/avatar`, formData)
                .then(response => {
                    const filename = response.data.filename;
                    const photoUrl = `http://localhost:5000/files/avatar/${filename}`;

                    api.put(`/employees/${user.id}`, {
                        password,
                        photoUrl
                    })

                    localStorage.setItem('user', JSON.stringify({ ...user, photoUrl }));
                    console.log(JSON.parse(localStorage.getItem('user') || ''));
                    location.reload();
                })

            alert("Imagem enviada  com sucesso");
        } catch (err) {
            alert("Erro ao actualizar");
            console.log(err);
        }

    }

    const handleFileInput = (event: ChangeEvent) => {

        const input = event.target as HTMLInputElement;

        if (!input.files?.length) {
            return;
        }

        file = input.files[0];
    };

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>
                        Meu dados
                    </Title>
                    <form onSubmit={handleUpdateData}>
                        <div>
                            <label htmlFor="name">Foto</label>
                            <input
                                type="file"
                                onChange={handleFileInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input
                                value={user.name}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input
                                value={user.email}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="role">Cargo</label>
                            <input
                                value={user.roleId}
                                disabled
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Palavra Passe</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type='password'
                            />
                        </div>

                        <p className='error'>{error}</p>
                        <div className="options">
                            <Close>Cancelar</Close>
                            <button type="submit">Actualizar</button>
                        </div>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}