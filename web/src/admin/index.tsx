import axios from "axios";
import * as Dialog from '@radix-ui/react-dialog';
import { ListBullets, PencilSimpleLine, Trash, UserPlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, Top } from "./styles";
import { CreateEmployeesModal } from "../components/CreateEmployeeModal";


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
                        <li>Tarefas <ListBullets /></li>
                        <li>Funcionarios</li>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <li>Adicionar <UserPlus /></li>
                            </Dialog.Trigger>
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