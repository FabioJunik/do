import styled from "styled-components";




export const Container = styled.div`
    min-height: 100vh;
    background-color: var(--green-900);
`;

export const Top = styled.div`
    width: 100%;
    height: 18rem;
    padding: 3.6rem;

    background-color: var(--green-500);


    > div{
        width: 100%;
        max-width: 950px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 950px;
    margin: 0 auto;

    overflow: auto;


    nav ul{
        display: flex;
        gap: .2rem;
        justify-content: end;
        margin: 1rem 0;
    }

    nav ul li{
        padding: .5rem 1rem;        
        background-color: var(--green-500);
        color: var(--white);
        
        display: flex;
        /* justify-content:space-between; */
        align-items: center;
        gap: 0.5rem;

        font-size: 1.3rem;
        
        cursor: pointer;
        transition: .2s;

        svg{
            font-size:1.7rem;
        }

        &:hover{
            background-color:var(--green-700);
        }

        &:first-child{
            border-radius: 0.5rem 0 0 0.5rem;
        }   

        &:last-child{
            border-radius: 0 0.5rem 0.5rem 0;
        }  
        
    }
    table{
        width: 100%;
        min-width:800px;

        border-radius: 0.5rem;
        background-color: var(--gray-300);

        text-align: left;
        font-size: 1.6rem;
        border-collapse: collapse;
        color: var(--black-500);

        th{
            font-weight: 600;
            padding: 1rem;
            border-bottom: 3px solid var(--green-900);   
        }


        td{
            border-bottom: 1px solid var(--green-900);   
            padding: 1rem;
            font-size: 1.4rem;


            :last-child svg{
                font-size:2rem;
                margin-right: 2rem;
                cursor:pointer;
                transition: filter 0.1s;
            
                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`;