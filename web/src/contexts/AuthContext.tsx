import axios from "axios";
import { createContext, useEffect, useState } from "react";


interface IAuthContextProps {
    user: Object;
    isAuthenticated: boolean;
    singIn: (data: ISingInProps) => Promise<void>;
}

interface ISingInProps {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as IAuthContextProps)


export function AuthProvider({ children }: { children: JSX.Element }) {
    const [user, setUser] = useState({});
    const isAuthenticated = !!user;
    let token = '';


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = JSON.parse(localStorage.getItem("user") || '');
            setUser(user);
        }

    }, [])

    async function singIn({ email, password }: ISingInProps) {
        await axios.post("http://localhost:5000/employees/authenticate", {
            email,
            password
        }).then(response => {
            token = response.data.token;
            console.log(response.data.employee)
            setUser(response.data.employee)
        });

        localStorage.setItem("token", token.toString());
        localStorage.setItem("user", JSON.stringify(user));

        location.href = "/home";
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}