import { useContext, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import { ListBullets, Plus, UserPlus } from "phosphor-react";

import { EmployeeModal } from "../components/EmployeesModal";
import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, PopoverArrow, PopoverContent, Top } from "../styles/styledComponents";
import { EmployeeTable } from '../components/EmployeeTable';
import { AssignedTaskTable } from '../components/AssignedTaskTable';
import { UnassignedTaskTable } from '../components/UnassignedTaskTable';
import { CreateTaskModal } from '../components/CreateTaskModal';
import { AuthContext } from '../contexts/AuthContext';

interface IUserProps {
    id: string;
    photoUrl: string;
}

export function Home() {

    const { user: User } = useContext(AuthContext);
    const user = User as IUserProps;

    const [showEmployeeTable, setShowEmployeeTable] = useState(false);
    const [showAssignedTaskTable, setShowAssignedTaskTable] = useState(true);
    const [showUnassignedTaskTable, setShowUnassignedTaskTable] = useState(false);
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
                        <Popover.Root>
                            <li>
                                <Popover.Trigger className="first">Tarefas <ListBullets /></Popover.Trigger>
                            </li>
                            <PopoverContent>
                                <Dialog.Root>
                                    <Dialog.Trigger title="Adicionar tarefa">
                                        <Plus />
                                    </Dialog.Trigger>
                                    <CreateTaskModal />
                                </Dialog.Root>
                                <button
                                    onClick={() => {
                                        setShowAssignedTaskTable(true);
                                        setShowUnassignedTaskTable(false);
                                        setShowEmployeeTable(false);
                                    }}
                                >Atribuidas</button>
                                <button
                                    onClick={() => {
                                        setShowUnassignedTaskTable(true);
                                        setShowAssignedTaskTable(false);
                                        setShowEmployeeTable(false);
                                    }}
                                >Não atribuidas</button>
                                <button>Não finalizadas</button>
                                <PopoverArrow />
                            </PopoverContent>
                        </Popover.Root>
                        <li>
                            <button
                                onClick={() => {
                                    setShowEmployeeTable(true);
                                    setShowAssignedTaskTable(false);
                                    setShowUnassignedTaskTable(false);
                                }}
                            >
                                Funcionarios
                            </button>
                        </li>
                        <Dialog.Root>
                            <li>
                                <Dialog.Trigger className="last">
                                    Adicionar <UserPlus />
                                </Dialog.Trigger>
                            </li>
                            <EmployeeModal />
                        </Dialog.Root>
                    </ul>
                </nav>
                {showEmployeeTable && <EmployeeTable />}
                {showAssignedTaskTable && <AssignedTaskTable />}
                {showUnassignedTaskTable && <UnassignedTaskTable />}
            </Content>
        </Container>
    )
}