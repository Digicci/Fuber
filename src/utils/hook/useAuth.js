import React,{ useContext, createContext, useState } from 'react';
import axios from "axios";


const authContext = createContext();
const apiPath = "http://localhost:8000/api/user";



export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}



export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (credential, mdp) => {
        let data
        if (credential.includes('@')) {
            data = {
                email: credential,
                mdp
            }
        } else {
            data = {
                tel: credential,
                mdp
            }
        }
        return axios.post(`${apiPath}/login`, data)
    };

    const isConnected = () => {
        return user !== null;
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return {
        user,
        setUser,
        signin,
        signout,
        isConnected
    };
}