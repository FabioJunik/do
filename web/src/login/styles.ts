import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--green-500);
    background-color: #008259;
`;

export const FormStyled = styled.form`
    width: 35rem;
    padding: 5rem 3rem;

    border: 1px solid #aaa;
    border-radius: 1rem;


    h1{
        font-size: 3rem;
        margin-bottom: 3rem;
        color: var(--white);
    }

    input{
        width: 100%;
        padding: 1rem 2rem;
        margin-bottom: 2rem;

        font-size: 1.4rem;

        border: none;
        background-color: var(--gray-300);
        border-radius: 1rem;

    }

    button{
        width: 100%;
        padding: 1rem;
        margin-right:auto;
        background-color: var(--green-500);

        color: var(--gray-300);

        font-size: 1.6rem;
        font-weight: 600;

        border-radius: 1rem;
        border: none;
    }
`;