import React, { createContext, useContext, useState } from "react";
import { useAxios } from "../useAxios";
import { useAuthEntreprise } from "./useAuthEntreprise";
import {useDispatch} from "react-redux";
import {updateStats} from "../../store/Partner/actions/StatActions";

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
    const dispatch = useDispatch()

    const getNumberOfRaceById = (id) => {
        return axios.get(`${basePath}/getNumberOfRaceById/${id}`, { withCredentials: true })
    }

    const getStats = () => {
        axios.get(
            `${basePath}/getNumberOfRace`,
            { withCredentials: true }
        ).then((res) => {
            const {count} = res.data;
            axios.get(
                `${basePath}/getCa`,
                { withCredentials: true }
            ).then((res) => {
                const {ca} = res.data
                dispatch(updateStats({
                    numberOfRace: count,
                    ca
                }))
            })
        })
    }

    return {
        getNumberOfRaceById,
        getStats
    };
}
