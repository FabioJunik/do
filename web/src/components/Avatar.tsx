import styled from "styled-components"



const AvatarStyles = styled.img`
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    outline: 2px solid var(--white);
    border: 2px solid var(--green-500);
`;

interface AvatarProps {
    src: string;
}

export function Avatar({ src }: AvatarProps) {
    return (
        <AvatarStyles src={src} />
    )
}