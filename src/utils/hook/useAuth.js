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

    const signin = (credential, mdp, token) => {
        let data
        if (credential.includes('@')) {
            data = {
                email: credential,
                mdp,
                _csrf: token
            }
        } else {
            data = {
                tel: credential,
                mdp,
                _csrf: token
            }
        }
        return axios.post(`${basePath}/login`, data)
    };

    const signup = (data) => {
        return axios.post(`${basePath}/signup`, data, { withCredentials: true })
    }

    const isConnected = () => {
        return user !== null;
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.clear();
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