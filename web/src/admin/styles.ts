import styled from "styled-components";




export const Container = styled.div`
    min-height: 100vh;
    background-color: var(--green-900);
`;

export const Top = styled.div`
    width: 100%;
    height: 22rem;
    padding: 3.6rem;

    background-color: var(--green-500);


    > div{
        width: 100%;
        max-width: 750px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    background-color: var(--gray-300);
`;