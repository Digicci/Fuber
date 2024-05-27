import React,{ useContext, createContext } from 'react';
import { useCsrf } from "./useCsrf";
import axios from "axios";

const axiosContext = createContext();
const apiPath = "http://localhost:8000/api";
const api = axios.create({
    baseURL: apiPath
})

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
        const JWT = window.location.pathname.includes("partner") ?
            localStorage.getItem("driver_token")
            :
            localStorage.getItem("user_token");
        api.defaults.headers.common['Authorization'] = JWT ? `Bearer ${JWT}` : null;
        api.defaults.headers.post['X-CSRF-TOKEN'] = csrf.token;
        api.defaults.withCredentials = true;
    }

    const get = (path, config) => {
        setHeader();
        return api.get(`${path}`, config)
    };

    const getAdress = (query, {lng, lat}, config = {}) => {
        query = query.replace(/ /g, "+");
        axios.defaults.headers.common['Authorization'] = null;
        return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}&lat=${lat}&lon=${lng}`, {...config, withCredentials: false})
    }

    const getAdressByCoord = ({lng, lat}, config = {}) => {
        axios.defaults.headers.common['Authorization'] = null;
        return axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}`, {...config, withCredentials: false})
    }

    const post = (path, data) => {
        setHeader();
        return api.post(`${path}`, data)
    };

    const put = (path, data, config) => {
        setHeader();
        return api.put(`${path}`, data, config)
    };

    const del = (path, config) => {
        setHeader();
        return api.delete(`${path}`, config)
    };


    return {
        get,
        post,
        put,
        del,
        getAdress,
        getAdressByCoord,
        api
    };
}