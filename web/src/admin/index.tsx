import { ListBullets, PencilLine, PencilSimpleLine, Trash, TrashSimple, UserPlus } from "phosphor-react";
import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, Top } from "./styles";



export function Home() {
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
                        <li>Adicionar <UserPlus /></li>
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
                        <tr>
                            <td>Fábio Madaleno Simão dos Santos</td>
                            <td>fabiojunik@gmail.com</td>
                            <td>Back End</td>
                            <td>
                                <PencilSimpleLine color="var(--green-700)" />
                                <Trash color="var(--red-600)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </Container>
    )
}