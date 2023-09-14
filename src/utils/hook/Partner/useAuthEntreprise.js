import React, {createContext, useContext, useState} from "react";
import {useAxios} from "../useAxios";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setAuth} from "../../store/Partner/actions/AuthActions";
import {getAuth} from "../../store/Partner/selectors/AuthSelectors";

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
    const dispatch = useDispatch();
    const auth = useSelector(getAuth);

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
        if(auth.user !== null){
            return;
        }
        if(localStorage.getItem("driver_token")) {
            axios.get(`${basePath}/get`).then((res) => {
                console.log(res)
                if(res.status === 401) {
                    dispatch(setAuth(null));
                    localStorage.removeItem("driver_token");
                }
                else if(res.data) {
                    dispatch(setAuth(res.data));
                }else{
                    dispatch(setAuth(null));
                    localStorage.removeItem("driver_token");
                }
            }).catch((err) => {
                console.log(err)
                console.log("error")
                dispatch(setAuth(null));
                localStorage.removeItem("driver_token");
            })
        }
        else{
            dispatch(setAuth(null));
        }
    }

    const getTeam = async () => {
        return await axios.get(`${basePath}/team`, {withCredentials: true});
    }

    const isConnected = () => {
        getEntreprise()
        return auth.auth;
    }

    const updateEntreprise = (entreprise) => {
        return axios.put(`${basePath}/update`, normalizeEntrepriseWithCSRF(entreprise), {withCredentials: true})
    }

    const signout = () => {
        localStorage.removeItem("driver_token");
        localStorage.clear();
        setEntreprise(null);
        dispatch(setAuth(null));
        navigate("/partner/login",{replace:true});
    };

    const registerVehicule = (data) => {
        return axios.post(`${basePath}/addVehiculeToSelf`, data)
    }

    return {
        entreprise,
        setEntreprise,
        signin,
        signup,
        register,
        signout,
        isConnected,
        updateEntreprise,
        getEntreprise,
        getTeam,
        registerVehicule,
    }
}