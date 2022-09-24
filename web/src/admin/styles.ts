import styled from "styled-components";
import * as Popover from '@radix-ui/react-popover';



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

        .first{
            border-radius: 0.5rem 0 0 0.5rem;
        }   

        .last{
            border-radius: 0 0.5rem 0.5rem 0;
        }  
    }

    nav ul li button{
        height: 3rem;
        padding: .5rem 1rem;        
        background-color: var(--green-500);
        color: var(--white);
        
        border: none;
        
        display: flex;
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
            padding: 1rem 2rem;
            border-bottom: 3px solid var(--green-900);   
        }


        td{
            border-bottom: 1px solid var(--green-900);   
            padding: 1rem 2rem;
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

        span{
            padding: 0.25rem 1rem;
            font-size: 1.1rem;
            border-radius: 0.5rem;
            color: var(--white);
            font-weight: 600;
        }

        &.optionsButton button{
            width: 7.5rem;
            height:2.5rem;
            margin-right:1rem;
            
            font-size: 1.2rem;
            border-radius: 5px;
            border:none;

            color: var(--white);
            background-color: var(--blue-900);

            &.remove{
                background-color: var(--red-600);
            }
        }
        .done{
            background-color: green;
        }

        .processing{
            background-color: orange;
        }
    }
`;

export const PopoverContent = styled(Popover.Content)`
    position: relative;
    border-radius: 5px;
    padding: 1.5rem;
    font-size: 1.4rem;
    background-color: #fff;
    color: black;
    display: flex;
    /* flex-direction: column; */
    gap: 1rem;

    button{
        padding: 0.5rem 1rem;	
        background-color: var(--green-300);
        border: none;
        color: var(--green-900);
        font-weight: bold;
        font-size: 1.2rem;

        svg{
            margin-top:0.2rem;
        }
    }
`

export const PopoverArrow = styled(Popover.Arrow)`
    fill: #fff;
`