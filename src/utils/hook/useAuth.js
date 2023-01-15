import React,{ useContext, createContext, useState } from 'react';
import { useAxios } from "./useAxios";
import { useNavigate } from "react-router-dom";


const authContext = createContext();
const basePath = "user";


const normalizeUser = (user) => {
    return {
        nom: user.nom,
        prenom: user.prenom,
        num: user.num,
        mail: user.mail
    }
}


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
    const navigate = useNavigate();

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

    const updateUser = (user) => {
        return axios.put(`${basePath}/update`, normalizeUser(user), { withCredentials: true})
    }

    const signout = () => {
        axios.get(`${basePath}/logout`, { withCredentials: true }).then((res) => {
            localStorage.removeItem("token");
            localStorage.clear();
            setUser(null);
            navigate("/login", { replace: true });
        }).catch((err) => {
            console.log(err)
        })
    };

    return {
        user,
        setUser,
        signin,
        signup,
        signout,
        isConnected,
        updateUser
    };
}