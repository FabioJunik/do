import * as Dialog from "@radix-ui/react-dialog";
import * as Popover from "@radix-ui/react-popover";
import { SignOut, User } from "phosphor-react";
import styled from "styled-components"
import { PopoverArrow } from "../styles/styledComponents";
import { EditeProfileEmployeeModal } from "./EditeProfileEmployeeModal";



const AvatarStyles = styled.img`
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    outline: 2px solid var(--white);
    border: 2px solid var(--green-500);

    cursor: pointer;
`;

export const PopoverContent = styled(Popover.Content)`
    border-radius: 5px;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    background-color: #fff;
    color: black;

    button{
        width: 100%;
        background-color: transparent;
        border: none;
        color: var(--black-300);
        
        font-weight: bold;
        font-size: 1.2rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        & + button{

            margin-top: 0.5rem;
            border-top: 1px solid #ddd;
            padding-top: 0.5rem;
        }

        :hover{
            color: var(--green-500);
        }
        svg{
            font-size: 1.5rem;
            /* margin-top:0.2rem; */
        }
    }
`

const PopoverTrigger = styled(Popover.Trigger)`
    background: transparent;
    border-radius: 50%;
    border: none;
`

interface AvatarProps {
    src: string;
}

export function Avatar({ src }: AvatarProps) {

    function handleSingOut() {
        localStorage.setItem('user', '');
        localStorage.setItem('token', '');

        location.href = '/';
    }

    return (
        <Popover.Root>
            <PopoverTrigger >
                <AvatarStyles src={src} />
            </PopoverTrigger>
            <PopoverContent>
                <Dialog.Root>
                    <Dialog.Trigger title="Adicionar tarefa">
                        <User /> Meu perfil
                    </Dialog.Trigger>
                    <EditeProfileEmployeeModal />
                </Dialog.Root>
                <button onClick={handleSingOut}><SignOut />Sair</button>
                <PopoverArrow />
            </PopoverContent>
        </Popover.Root>
    )
}