import React,{ useContext, createContext, useState } from 'react';
import { useAxios } from "./useAxios";


const authContext = createContext();
const basePath = "user";



export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}



export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const axios = useAxios();

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
        return axios.post(`${basePath}/login`, data)
    };

    const signup = (data) => {
        return axios.post(`${basePath}/signup`, data)
    }

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
        signup,
        signout,
        isConnected
    };
}