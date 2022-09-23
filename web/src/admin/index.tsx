import axios from "axios";
import { useEffect, useState } from "react";

import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import { ListBullets, PencilSimpleLine, Trash, UserPlus, X } from "phosphor-react";

import { CreateEmployeesModal } from "../components/CreateEmployeeModal";
import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, PopoverArrow, PopoverContent, Top } from "./styles";


interface IEmployeeProps {
    id: string;
    name: string;
    email: string;
    role: {
        name: string;
    }
}


export function Home() {
    const [employee, setEmployee] = useState<IEmployeeProps[]>([]);

    useEffect(() => {
        axios("http://localhost:5000/employees")
            .then(response => {
                setEmployee(response.data)
            })
    }, []);

    return (
        <Container>
            <Top>
                <div>
                    <Logo />
                    <Avatar src='https://github.com/fabiojunik.png' />
                </div>
            </Top>
            <Content>
                <nav>
                    <ul>
                        <Popover.Root>


                            <li>
                                <Popover.Trigger className="first">Tarefas <ListBullets /></Popover.Trigger>
                            </li>
                            <PopoverContent>
                                <button>Atribuidas</button>
                                <button>Não atribuidas</button>
                                <button>Não finalizadas</button>
                                <PopoverArrow />
                            </PopoverContent>
                        </Popover.Root>
                        <li><button>Funcionarios</button></li>
                        <Dialog.Root>
                            <li>
                                <Dialog.Trigger className="last">
                                    Adicionar <UserPlus />
                                </Dialog.Trigger>
                            </li>
                            <CreateEmployeesModal />
                        </Dialog.Root>
                    </ul>
                </nav>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Cargo</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee && employee.map(({ id, name, role, email }) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role.name}</td>
                                <td>
                                    <PencilSimpleLine color="var(--green-700)" />
                                    <Trash color="var(--red-600)" />
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </Content>
        </Container>
    )
}