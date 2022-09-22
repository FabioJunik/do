import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';


export const Overlay = styled(Dialog.Overlay)`
    background: rgba(0 0 0 / 0.5);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: start;
    justify-content:center;
`;

export const Content = styled(Dialog.Content)`
    width: 40rem;
    background: white;
    padding: 3rem;
    border-radius: .4rem;
    margin-top: 15rem;

    display: flex;
    flex-direction: column;

    input, select{
        width: 100%;
        padding: 1rem 1rem;
        border-radius: 0.2rem;
        border: 1px solid var(--gray-300);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    label{
        font-size:1.4rem;
        margin-top: 2rem;
        color:var(--black-600);   
    }

    .options{
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;

        button{
            padding: 1rem 0;
            flex:1;
            border:none;
            background-color: var(--green-500);
            color: var(--white);

            :first-child{
                border-radius: .5rem 0 0 .5rem;
                background-color: var(--red-600)
            }

            :last-child{
                border-radius:0 .5rem .5rem 0;
            
            }
        }
    }
`;

export const Title = styled(Dialog.Title)`
    font-size: 2rem;
    color:var(--green-900);
    font-weight: 600;
    margin-bottom: 1rem;
`;

export const Close = styled(Dialog.Close)`

`;