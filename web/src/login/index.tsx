import axios from "axios";
import { FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


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

        // let token = '';

        // try {
        //     await axios.post("http://localhost:5000/employees/authenticate", {
        //         email: data.email,
        //         password: data.password
        //     }).then((response) => { token = response.data });

        //     await axios.post("http://localhost:5000/employees/authenticate", {
        //         email: data.email,
        //         password: data.password
        //     }, {
        //         headers: {
        //             authorization: 'Bearer ' + token
        //         }
        //     });
        //     console.log(token);
        //     // location.href = "/home";

        // } catch (err) {
        //     console.log(err);
        // }


    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                />
                <input type="password" placeholder="password" name="password" id="password" />

                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}