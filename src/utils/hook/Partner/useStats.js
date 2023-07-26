import React, { createContext, useContext, useState } from "react";
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

    const getNumberOfRaceById = (id) => {
        return axios.get(`${basePath}/getNumberOfRaceById/${id}`, { withCredentials: true })
    }

    return {
        getNumberOfRaceById,
    };
}
