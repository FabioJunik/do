import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import { ListBullets, UserPlus } from "phosphor-react";

import { CreateEmployeesModal } from "../components/CreateEmployeeModal";
import { Avatar } from "../components/Avatar";
import { Logo } from "../components/Logo";
import { Container, Content, PopoverArrow, PopoverContent, Top } from "./styles";
import { EmployeeTable } from '../components/EmployeeTable';
import { AssignedTaskTable } from '../components/AssignedTaskTable';


export function Home() {
    const [showEmployeeTable, setShowEmployeeTable] = useState(false);
    const [showAssignedTaskTable, setShowAssignedTaskTable] = useState(true);
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
                                <button
                                    onClick={() => {
                                        setShowAssignedTaskTable(true);
                                        setShowEmployeeTable(false);
                                    }}
                                >Atribuidas</button>
                                <button>Não atribuidas</button>
                                <button>Não finalizadas</button>
                                <PopoverArrow />
                            </PopoverContent>
                        </Popover.Root>
                        <li>
                            <button
                                onClick={() => {
                                    setShowAssignedTaskTable(false);
                                    setShowEmployeeTable(true);
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
                            <CreateEmployeesModal />
                        </Dialog.Root>
                    </ul>
                </nav>
                {showEmployeeTable && <EmployeeTable />}
                {showAssignedTaskTable && <AssignedTaskTable />}
            </Content>
        </Container>
    )
}