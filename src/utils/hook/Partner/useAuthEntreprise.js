import React, {createContext, useContext, useState} from "react";
import {useAxios} from "../useAxios";
import {useNavigate} from "react-router-dom";

const authContext = createContext();
const basePath = "entreprise";

const normalizeEntrepriseWithCSRF = (entreprise) => {
    return {
        nom: entreprise.nom,
        prenom: entreprise.prenom,
        num: entreprise.num,
        _csrf: entreprise._csrf
    }
}

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

    const signin = (email, mdp, token) => {
        let data
        if(email.includes('@')){
            data = {
                mail: email,
                mdp,
                _csrf: token
            }
        }
        return axios.post(`${basePath}/login`, data)
    };

    const signup = (data) => {
        return axios.post(`${basePath}/signup`, data)
    }

    const register = (data) => {
        return axios.post(`${basePath}/register`, data)
    }

    const getEntreprise = () => {
        if(entreprise){
            return;
        }
        if(localStorage.getItem("driver_token")) {
            axios.get(`${basePath}/get`).then((res) => {
                console.log(res)
                if(res.status === 401) {
                    setEntreprise(null);
                    localStorage.removeItem("driver_token");
                }
                else if(res.data) {
                    setEntreprise(res.data);
                }else{
                    setEntreprise(null)
                    localStorage.removeItem("driver_token");
                }
            }).catch((err) => {
                console.log(err)
                console.log("error")
                setEntreprise(null);
                localStorage.removeItem("driver_token");
            })
        }
        else{
            setEntreprise(null)
        }
    }

    const getTeam = async () => {
        return await axios.get(`${basePath}/team`, {withCredentials: true});
    }

    const isConnected = () => {
        getEntreprise()
        return entreprise !== null;
    }

    const UpdateEntreprise = (entreprise) => {
        return axios.put(`${basePath}/update`, normalizeEntrepriseWithCSRF(entreprise), {withCredentials: true})
    }

    const signout = () => {
        axios.get(`${basePath}/logout`, {}).then((res) =>{
            localStorage.removeItem("token");
            localStorage.clear();
            setEntreprise(null);
            navigate("/partner/login",{replace:true});
        }).catch((err) => {
            console.log(err)
            localStorage.removeItem("token");
            localStorage.clear();
            setEntreprise(null);
            navigate("/partner/login", {replace:true});
        })
    };

    return {
        entreprise,
        setEntreprise,
        signin,
        signup,
        register,
        signout,
        isConnected,
        UpdateEntreprise,
        getEntreprise,
        getTeam,
    }
}