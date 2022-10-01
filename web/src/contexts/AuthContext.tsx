import { createContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { toast } from 'react-toastify';



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

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = JSON.parse(localStorage.getItem("user") || '');
            setUser(user);
        }

    }, [])

    function redirect(token: string, user: {}, path: string) {
        setUser(user);
        localStorage.setItem("token", token.toString());
        localStorage.setItem("user", JSON.stringify(user));

        location.href = path;
    }

    async function singIn(data: ISingInProps) {
        try {
            await api.post("/employees/authenticate", data).then(response => {
                redirect(response.data.token, response.data.employee, "/employee/home")
            });
        } catch (err) {
            try {
                await api.post("/admins/authenticate", data).then(response => {
                    redirect(response.data.token, response.data.admin, "/admin/home")
                });
            } catch (err: any) {
                toast.error(err.response.data.error);
            }
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}