import { Check, CheckCircle, ListChecks } from "phosphor-react";
import styled from "styled-components";

const LogoStyles = styled.div`
    display: flex;
    align-items: center;
    color: var(--white);

    span{
        font-size: 4rem;
    }
    svg{
        font-size: 3rem;
        margin-top: 5px;
        margin-left: -4px;
    }
`

export function Logo() {
    return (
        <LogoStyles>
            <span>
                D
            </span>
            <CheckCircle />
        </LogoStyles>
    )
}