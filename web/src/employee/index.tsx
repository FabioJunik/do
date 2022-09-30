import { useContext, useEffect, useState } from 'react';
import { api } from '../service/api';
import { AuthContext } from '../contexts/AuthContext';

import { Checks, HourglassMedium, ListBullets, XCircle } from "phosphor-react";

import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, Top } from "../styles/styledComponents";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { AlertTrigger } from '../styles/alertModalStyles';
import { AlertModal } from '../components/AlertModal';

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
    const [allTasks, setAllTasks] = useState<ITaskProps[]>([]);

    useEffect(() => {
        api.get(`/assignedtasks/${user.id}`).
            then(response => {
                setTasks(response.data)
                setAllTasks(response.data)
            });
    }, [user])

    function handleFilterTasksByState(state: string) {
        if (state !== 'all') {
            const taskFiltered = allTasks.filter(task => task.state === state);
            setTasks(taskFiltered);

            return
        }

        setTasks(allTasks);
    }

    function handleToFinishOrUnfinishTasks(id: string, state: string) {
        try {
            api.post(`/assignedtasks/updatestate/${id}`, { state })

            setTasks(allTasks.map(task => task.id !== id ? task : { ...task, state: state }));

            alert("Tarefa finalizar/não finalizada com sucesso!");

        } catch (err) {
            alert("Erro ao finalizar/não finalizada a tarefa");
            console.log(err);
        }
    }

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
                            <button
                                onClick={() => handleFilterTasksByState('all')}
                                className="first"
                            >
                                Todas <ListBullets />
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleFilterTasksByState('pending')}
                            > Pendentes <HourglassMedium /></button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleFilterTasksByState('done')}
                            >
                                Finalizadas <Checks />
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleFilterTasksByState('undone')}
                                className='last'>
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
                            <tr key={id}>
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
                                        <button onClick={() => handleToFinishOrUnfinishTasks(id, "done")}>Finalizar</button>
                                        <button onClick={() => handleToFinishOrUnfinishTasks(id, "undone")} className='remove'>Não finalizar</button>
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