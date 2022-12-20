import React,{ useContext, createContext } from 'react';
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

    const setHeader = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null;
    }

    const get = (path, config) => {
        setHeader();
        return axios.get(`${apiPath}/${path}`, config)
    };

    const post = (path, data) => {
        setHeader();
        return axios.post(`${apiPath}/${path}`, data)
    };

    const put = (path, data) => {
        setHeader();
        return axios.put(`${apiPath}/${path}`, data)
    };

    const del = (path, config) => {
        setHeader();
        return axios.delete(`${apiPath}/${path}`, config)
    };


    return {
        get,
        post,
        put,
        del
    };
}