import { useContext, useEffect, useState } from 'react';
import { api } from '../service/api';
import { AuthContext } from '../contexts/AuthContext';

import { Checks, HourglassMedium, ListBullets, XCircle } from "phosphor-react";

import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, Top } from "../styles/styledComponents";

interface IUserProps {
    id: string;
    photoUrl: string;
}

interface ITaskProps {
    id: string;
    description: string;
    state: string;
    updatedAt: Date;
    createdAt: Date;
}

export function Home() {
    const { user: User } = useContext(AuthContext);
    const user = User as IUserProps;

    const [tasks, setTasks] = useState<ITaskProps[]>([]);

    useEffect(() => {
        api.get(`/assignedtasks/${user.id}`).
            then(response => {
                setTasks(response.data)
            });
    }, [user])

    return (
        <Container>
            <Top>
                <div>
                    <Logo />
                    <Avatar src={user.photoUrl} />
                </div>
            </Top>
            <Content>
                <nav>
                    <ul>
                        <li>
                            <button className="first">
                                Todas <ListBullets />
                            </button>
                        </li>
                        <li>
                            <button> Pendentes <HourglassMedium /></button>
                        </li>
                        <li>
                            <button>
                                Finalizadas <Checks />
                            </button>
                        </li>
                        <li>
                            <button className='last'>
                                Não finalizadas <XCircle />
                            </button>
                        </li>
                    </ul>
                </nav>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Data limite</th>
                            <th>Estado</th>
                            <th>Atribuida em ...</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(({ id, description, state, createdAt }) => (
                            <tr>
                                <td>{description}</td>
                                <td>------------</td>
                                <td>
                                    <span className={state}>
                                        {state === 'pending' && 'Pendente'}
                                        {state === 'done' && 'Finalizado'}
                                        {state === 'undone' && 'Não finalizado'}
                                    </span>
                                </td>
                                <td>{createdAt.toString().substring(0, 10)} às {createdAt.toString().substring(11, 16)}</td>
                                <td className='optionsButton'>
                                    {state === 'pending' && <>
                                        <button> Finalizar</button>
                                        <button className='remove'>Não finalizar</button>
                                    </>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Container >
    )
}