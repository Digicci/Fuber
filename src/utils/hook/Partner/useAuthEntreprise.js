import React ,{ useContext, createContext, useState } from "react";
import { useAxios } from "../useAxios";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
const basePath = "entreprise";


export function ProvideAuthEntreprise({children}) {
    const authEntreprise = useProvideAuthEntreprise();
    return <authContext.Provider value={authEntreprise}>{children}</authContext.Provider>;
}

export const useAuthEntreprise = () =>{
    return useContext(authContext);
}

function useProvideAuthEntreprise() {
    const [entreprise,setEntreprise] = useState(null);
    const axios = useAxios();
    const navigate = useNavigate();

    const signin = (credential, mdp, token) => {
        let data
        if(credential.includes('@')){
            data = {
                email: credential,
                mdp,
                _csrf: token
            }
        }
        return axios.post(`${basePath}/login`, data)
    };

    const signup = (data) => {
        return axios.post(`${basePath}/signup`, data,{withCredentials: true})
    }

    const getEntreprise = () => {
        if(entreprise){
            return;
        }
        if(localStorage.getItem("token")) {
            axios.get(`${basePath}/get`,{withCredentials:true}).then((res) => {
                console.log(res)
                if(res.status === 401) {
                    setEntreprise(null);
                }
                else if(res.data) {
                    setEntreprise(res.data);
                }else{
                    setEntreprise(null)
                }
            }).catch((err) => {
                console.log(err)
                console.log("error")
                setEntreprise(null);
            })
        }
        else{
            setEntreprise(null)
        }
    }

    const isConnected = () => {
        getEntreprise()
        return entreprise !== null;
    }

    const signout = () => {
        axios.post(`${basePath}/logout`, {}, {withCredentials:true}).then((res) =>{
            localStorage.removeItem("token");
            localStorage.clear();
            setEntreprise(null);
            navigate("/login",{replace:true});
        }).catch((err) => {
            console.log(err)
            localStorage.removeItem("token");
            localStorage.clear();
            setEntreprise(null);
            navigate("/login", {replace:true});
        })
    };

    return {
        entreprise,
        setEntreprise,
        signin,
        signup,
        signout,
        isConnected,
        getEntreprise,
    }
}