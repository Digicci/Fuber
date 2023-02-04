import React, {createContext, useContext, useState} from "react";

const raceContext = createContext();

export function RaceProvider({children}) {
    const race = useProvideRace();
    return <raceContext.Provider value={race}>{children}</raceContext.Provider>;
}

export const useRace = () => {
    return useContext(raceContext);
}

function useProvideRace() {
    const [raceInfo, setRaceInfo] = useState({
        start: localStorage.getItem("raceStart") ?? '',
        end: localStorage.getItem("raceEnd") ?? '',
        driverId: localStorage.getItem("raceDriverId") ?? '',
        promo: localStorage.getItem("racePromo") ?? {
            id: '',
            code: '',
            price: 0,
        },
        total: parseFloat(localStorage.getItem("raceTotal")) ?? 0,
        driverPrice: parseFloat(localStorage.getItem("raceDriverPrice")) ?? 0,
        commissionPrice: parseFloat(localStorage.getItem("raceCommissionPrice")) ?? 0,
    });

    const setRace = (field, value) => {
        setRaceInfo({
            ...raceInfo,
            [field]: value
        })
        localStorage.setItem(`race${field.charAt(0).toUpperCase() + field.slice(1)}`, value)
    }


    return {
        raceInfo,
        setRace,
        setRaceInfo
    }
}