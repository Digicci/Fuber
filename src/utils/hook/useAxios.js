import React,{ useContext, createContext } from 'react';
import { useCsrf } from "./useCsrf";
import axios from "axios";

const axiosContext = createContext();
const apiPath = "http://localhost:8000/api";

export function ProvideAxios({ children }) {
    const axios = useProvideAxios();
    return <axiosContext.Provider value={axios}>{children}</axiosContext.Provider>;
}

export const useAxios = () => {
    return useContext(axiosContext);
}

function useProvideAxios() {

    const csrf = useCsrf();

    const setHeader = () => {
        const JWT = localStorage.getItem("token");
        axios.defaults.headers.common['Authorization'] = JWT ? `Bearer ${JWT}` : null;
        axios.defaults.headers.post['X-CSRF-TOKEN'] = csrf.token;
        axios.defaults.withCredentials = true;
    }

    const get = (path, config) => {
        setHeader();
        return axios.get(`${apiPath}/${path}`, config)
    };

    const getAdress = (query, {lng, lat}, config = {}) => {
        query = query.replace(/ /g, "+");
        axios.defaults.headers.common['Authorization'] = null;
        return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}&lat=${lat}&lon=${lng}`, {...config, withCredentials: false})
    }

    const post = (path, data) => {
        setHeader();
        return axios.post(`${apiPath}/${path}`, data)
    };

    const put = (path, data, config) => {
        setHeader();
        return axios.put(`${apiPath}/${path}`, data, config)
    };

    const del = (path, config) => {
        setHeader();
        return axios.delete(`${apiPath}/${path}`, config)
    };


    return {
        get,
        post,
        put,
        del,
        getAdress
    };
}