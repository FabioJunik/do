import { useContext, useEffect, useState } from 'react';
import { api } from '../service/api';
import { AuthContext } from '../contexts/AuthContext';

import { Checks, HourglassMedium, ListBullets, XCircle } from "phosphor-react";

import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, Top } from "../styles/styledComponents";


export function Home() {
    const { user } = useContext(AuthContext);

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
                        <tr>
                            <td>Lorem ipsum dolor adipisicing elit.</td>
                            <td>12/04/4212</td>
                            <td>
                                <span className='pending'>
                                    Pendente
                                </span>
                            </td>
                            <td>14/03/1002</td>
                            <td className='optionsButton'>
                                <button> Finalizar</button>
                                <button className='remove'>Não finalizar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </Container >
    )
}