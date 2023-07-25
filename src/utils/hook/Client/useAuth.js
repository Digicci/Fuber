import React,{ useContext, createContext, useState } from 'react';
import { useAxios } from "../useAxios";
import { useNavigate } from "react-router-dom";


const authContext = createContext();
const basePath = "user";


const normalizeUserWithCSRF = (user) => {
    return {
        nom: user.nom,
        prenom: user.prenom,
        num: user.num,
        mail: user.mail,
        _csrf: user._csrf
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
    const getUser = () => {
        if (user) {
            return;
        }
        if (localStorage.getItem("user_token")) {
            axios.get(`${basePath}/get`, { withCredentials: true }).then((res) => {
                console.log(res)
                if (res.status === 401) {
                    setUser(null);
                    localStorage.removeItem("user_token");
                }
                else if (res.data) {
                    setUser(res.data);
                } else {
                    setUser(null);
                    localStorage.removeItem("user_token");
                }
            }).catch((err) => {
                console.log(err)
                console.log("error")
                setUser(null);
                localStorage.removeItem("user_token");
            })
        }
        else {
            setUser(null);
        }

    }

    const isConnected = () => {
        getUser()
        return user !== null;
    }

    const updateUser = (user) => {
        return axios.put(`${basePath}/update`, normalizeUserWithCSRF(user), { withCredentials: true})
    }

    const signout = () => {
        axios.post(`${basePath}/logout`,{}, { withCredentials: true }).then((res) => {
            localStorage.removeItem("user_token");
            localStorage.clear();
            setUser(null);
            navigate("/login", { replace: true });
        }).catch((err) => {
            console.log(err)
            localStorage.removeItem("user_token");
            localStorage.clear();
            setUser(null);
            navigate("/login", { replace: true });
        })
    };

    return {
        user,
        setUser,
        signin,
        signup,
        signout,
        isConnected,
        updateUser,
        getUser
    };
}