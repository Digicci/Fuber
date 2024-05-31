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
    
    axios.api.interceptors.response.use(
      (response) => response,
      async function (error) {
          const originalRequest = error.config
          if (error.config.url !== "/api/user/refreshToken" && error.response.status === 401 && !originalRequest._retry) {
              originalRequest._retry = true;
              const refreshToken = localStorage.getItem('user_refresh_token')
              if (refreshToken && refreshToken !== '') {
                  axios.api.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`
                  await axios.api.post('/user/refreshToken').then(response => {
                      originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`
                      axios.api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
                      localStorage.setItem('user_token', response.data.token)
                  })
                  return axios.api(originalRequest)
              }
          } else if (error.response.status === 401 && originalRequest._retry){
              signout()
          }
          return Promise.reject(error);
      }
    )

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
            }).finally(() => {
                if(!user) {
                    navigate("/login", { replace: true });
                }
            })

        }
        else {
            setUser(null);
            navigate("/login", { replace: true })
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
        axios.get(`${basePath}/logout`, { withCredentials: true }).then((res) => {
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