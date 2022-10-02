import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { api } from '../service/api';
import { AuthContext } from '../contexts/AuthContext';

import * as Dialog from '@radix-ui/react-dialog';
import { toast } from 'react-toastify';

import { Content, Overlay, Title, Close } from '../styles/modalStyles';


interface IUserProps {
    id?: string;
    name: string;
    photoUrl?: string;
    password: string;
    email: string;
    roleId?: string;
}


export function EditeProfileModal() {
    const [error, setError] = useState('');

    const { user: User } = useContext(AuthContext);
    const user = User as IUserProps;

    const [password, setPassword] = useState(user.password);
    let file: File;

    const [dataForm, setDataForm] = useState<IUserProps>({
        name: user.name,
        email: user.email,
        password: user.password
    })


    async function handleUpdateData(event: FormEvent) {
        event.preventDefault();

        if (!password) {
            setError('A password não pode estar vazia')
            return
        }

        const formData = new FormData();
        formData.append('avatar', file);

        try {
            if (file) {
                await api.post(`/uploads/avatar`, formData)
                    .then(response => {
                        const filename = response.data.filename;
                        user.photoUrl = `http://localhost:5000/files/avatar/${filename}`;
                    })
            }

            if (user.roleId) {
                await api.put(`/employees/${user.id}`, {
                    password,
                    photoUrl: user.photoUrl
                })
            } else {
                await api.put(`/admins/${user.id}`, {
                    name: dataForm.name,
                    email: dataForm.email,
                    password,
                    photoUrl: dataForm.photoUrl,
                })
            }

            user.name = dataForm.name;
            user.password = password;
            user.email = dataForm.email;

            localStorage.setItem('user', JSON.stringify({ ...user, photoUrl: user.photoUrl }));
            location.reload();

            toast.success("Dados actualizados com sucesso !")
        } catch (err: any) {
            toast.error(err.response.data.error)
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
                                value={dataForm.name}
                                onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })}
                                disabled={!!user.roleId}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input
                                value={dataForm.email}
                                onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })}
                                disabled={!!user.roleId}
                            />
                        </div>
                        {user.roleId &&
                            <div>
                                <label htmlFor="role">Cargo</label>
                                <input
                                    value={user.roleId}
                                    disabled
                                />
                            </div>
                        }
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