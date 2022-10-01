import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Container, FormStyled } from "./styles";


export function Login() {

    const { singIn } = useContext(AuthContext)

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const { email, password } = Object.fromEntries(formData);

        await singIn({
            email: email.toString(),
            password: password.toString(),
        });

    }

    return (
        <Container>
            <FormStyled onSubmit={handleLogin}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                />
                <input type="password" placeholder="Password" name="password" id="password" />

                <button type="submit">Entrar</button>
                <ToastContainer closeButton={false} style={{ fontSize: "1.5rem" }} />
            </FormStyled>
        </Container>
    )
}