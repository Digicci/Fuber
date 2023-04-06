import React, { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../useAxios";
import { useAuthEntreprise } from "./useAuthEntreprise";

const statsContext = createContext();
const basePath = "entreprise/stats"

export function ProvideStats({ children }) {
    const stats = useProvideStats();
    return <statsContext.Provider value={stats}>{children}</statsContext.Provider>;
}

export const useStats = () => {
    return useContext(statsContext);
}

function useProvideStats() {
    const axios = useAxios();
    const { entreprise } = useAuthEntreprise();
    const [numberOfRace, setNumberOfRace] = useState(0);
    const [ca, setCa] = useState(0);

    useEffect(() => {
        getNumberOfRace().then((res) => {
            setNumberOfRace(res.data.count)
        })
        getCa().then((res) => {
            setCa(res.data.ca)
        })
    },[entreprise])

    const getNumberOfRace = () => {
        return axios.get(`${basePath}/getNumberOfRace`, { withCredentials: true })
    }

    const getCa = () => {
        return axios.get(`${basePath}/getCa`, { withCredentials: true })
    }

    const getNumberOfRaceById = (id) => {
        return axios.get(`${basePath}/getNumberOfRaceById/${id}`, { withCredentials: true })
    }

    return {
        ca,
        numberOfRace,
        getNumberOfRace,
        getNumberOfRaceById
    };
}
