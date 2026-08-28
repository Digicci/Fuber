import React, { useContext, createContext, useState, useEffect, useRef, useCallback } from 'react';
import { useAxios } from "../useAxios";
import { useLocation, useNavigate } from "react-router-dom";

const authContext = createContext();
const basePath = "user";

const TOKEN_KEY = "user_token";
const REFRESH_TOKEN_KEY = "user_refresh_token";

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
    // `loading` evite de rediriger vers /login pendant la verification initiale.
    const [loading, setLoading] = useState(true);
    const axios = useAxios();
    const navigate = useNavigate();
    const location = useLocation();

    const signout = useCallback(() => {
        const clear = () => {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(REFRESH_TOKEN_KEY);
            setUser(null);
            navigate("/login", { replace: true });
        };
        axios.get(`${basePath}/logout`, { withCredentials: true })
            .then(clear)
            .catch(clear);
    }, [axios, navigate]);

    // L'intercepteur etait enregistre dans le corps du hook : il etait donc
    // reempile a chaque rendu. Il est desormais monte une seule fois et
    // retire au demontage.
    const signoutRef = useRef(signout);
    useEffect(() => {
        signoutRef.current = signout;
    }, [signout]);

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
                    signoutRef.current();
                    return Promise.reject(error);
                }

                const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
                if (!refreshToken) {
                    signoutRef.current();
                    return Promise.reject(error);
                }

                originalRequest._retry = true;
                try {
                    const response = await axios.api.post(`/${basePath}/refreshToken`, null, {
                        headers: { Authorization: `Bearer ${refreshToken}` }
                    });
                    localStorage.setItem(TOKEN_KEY, response.data.token);
                    originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
                    return axios.api(originalRequest);
                } catch (refreshError) {
                    signoutRef.current();
                    return Promise.reject(refreshError);
                }
            }
        );

        return () => axios.api.interceptors.response.eject(interceptorId);
    }, [axios]);

    // Verification de session au montage. Auparavant getUser() etait appelee
    // depuis isConnected() pendant le rendu, ce qui declenchait un setState en
    // cours de rendu et renvoyait toujours un etat perime au premier passage.
    useEffect(() => {
        let cancelled = false;

        if (!localStorage.getItem(TOKEN_KEY)) {
            setUser(null);
            setLoading(false);
            return;
        }

        axios.get(`${basePath}/get`, { withCredentials: true })
            .then((res) => {
                if (cancelled) return;
                if (res.data) {
                    setUser(res.data);
                } else {
                    setUser(null);
                    localStorage.removeItem(TOKEN_KEY);
                }
            })
            .catch(() => {
                if (cancelled) return;
                setUser(null);
                localStorage.removeItem(TOKEN_KEY);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signin = (credential, mdp, token) => {
        const data = credential.includes('@')
            ? { email: credential, mdp, _csrf: token }
            : { tel: credential, mdp, _csrf: token };
        return axios.post(`${basePath}/login`, data);
    };

    const signup = (data) => {
        return axios.post(`${basePath}/signup`, data, { withCredentials: true });
    };

    const updateUser = (nextUser) => {
        return axios.put(`${basePath}/update`, normalizeUserWithCSRF(nextUser), { withCredentials: true });
    };

    // Lecture pure : plus aucun effet de bord pendant le rendu.
    const isConnected = () => user !== null;

    return {
        user,
        setUser,
        loading,
        signin,
        signup,
        signout,
        isConnected,
        updateUser,
        location
    };
}
