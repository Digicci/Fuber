import React, {createContext, useContext, useState, useEffect, useRef, useCallback} from "react";
import {useAxios} from "../useAxios";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setAuth} from "../../store/Partner/reducers/AuthReducer";
import {getAuth} from "../../store/Partner/selectors/AuthSelectors";

const authContext = createContext();
const basePath = "entreprise";
const TOKEN_KEY = "driver_token";
const REFRESH_TOKEN_KEY = "driver_refresh_token";

const normalizeEntrepriseWithCSRF = (entreprise) => {
    return {
        nom: entreprise.nom,
        prenom: entreprise.prenom,
        num: entreprise.num,
        prix: entreprise.prix,
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
        if(localStorage.getItem(TOKEN_KEY)) {
            axios.get(`${basePath}/get`).then((res) => {
                if(res.status === 401) {
                    dispatch(setAuth(null));
                    localStorage.removeItem(TOKEN_KEY);
                }
                else if(res.data) {
                    dispatch(setAuth(res.data));
                }else{
                    dispatch(setAuth(null));
                    localStorage.removeItem(TOKEN_KEY);
                }
            }).catch(() => {
                dispatch(setAuth(null));
                localStorage.removeItem(TOKEN_KEY);
            })
        }
        else{
            dispatch(setAuth(null));
        }
    }

    const getTeam = async () => {
        return await axios.get(`${basePath}/team`, {withCredentials: true});
    }

    // Verification de session au montage uniquement : isConnected() declenchait
    // un dispatch Redux pendant le rendu a chaque appel.
    useEffect(() => {
        getEntreprise()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isConnected = () => auth.auth;

    const updateEntreprise = (entreprise) => {
        return axios.put(`${basePath}/update`, normalizeEntrepriseWithCSRF(entreprise), {withCredentials: true})
    }

    const clearSession = useCallback(() => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        setEntreprise(null);
        dispatch(setAuth(null));
    }, [dispatch]);

    const signout = () => {
        // On previent l'API pour qu'elle revoque le token cote serveur
        // (incrementation de token_version), la purge locale ne suffit pas.
        const finish = () => {
            clearSession();
            navigate("/partner/login", {replace: true});
        };
        axios.get(`${basePath}/logout`).then(finish).catch(finish);
    };

    const clearSessionRef = useRef(clearSession);
    useEffect(() => {
        clearSessionRef.current = clearSession;
    }, [clearSession]);

    // Renouvellement automatique du token partenaire. Ce role etait le seul
    // sans refresh : le chauffeur etait deconnecte sechement au bout de 24h.
    useEffect(() => {
        const interceptorId = axios.api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                const status = error.response && error.response.status;

                if (status !== 401 || !originalRequest) {
                    return Promise.reject(error);
                }
                if (originalRequest.url === `/${basePath}/refreshToken` || originalRequest._retry) {
                    clearSessionRef.current();
                    return Promise.reject(error);
                }

                const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
                if (!refreshToken) {
                    clearSessionRef.current();
                    return Promise.reject(error);
                }

                originalRequest._retry = true;
                try {
                    const response = await axios.api.post(`/${basePath}/refreshToken`, null, {
                        headers: {Authorization: `Bearer ${refreshToken}`}
                    });
                    localStorage.setItem(TOKEN_KEY, response.data.token);
                    originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
                    return axios.api(originalRequest);
                } catch (refreshError) {
                    clearSessionRef.current();
                    return Promise.reject(refreshError);
                }
            }
        );

        return () => axios.api.interceptors.response.eject(interceptorId);
    }, [axios]);

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