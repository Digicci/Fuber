import React, {createContext, useContext, useState} from "react";
import {useAxios} from "../useAxios";

const raceContext = createContext();

export function RaceProvider({children}) {
    const race = useProvideRace();
    return <raceContext.Provider value={race}>{children}</raceContext.Provider>;
}

export const useRace = () => {
    return useContext(raceContext);
}

function useProvideRace() {
    const axios = useAxios();
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
        startLngLat: {
            lat: 0,
            lng: 0
        },
        endLngLat: {
            lat: 0,
            lng: 0
        },
        dist: 0,
        driverName: localStorage.getItem("raceDriverName") || '',
        driverSurname: localStorage.getItem("raceDriverSurname") || '',
        type: localStorage.getItem("raceType") || '',
    });

    const setRace = (field, value) => {
        setRaceInfo({
            ...raceInfo,
            [field]: value
        })
        console.log(field, value)
        console.log(raceInfo)
        localStorage.setItem(`race${field.charAt(0).toUpperCase() + field.slice(1)}`, value)
    }

    const unsetRace = () => {
        setRaceInfo({
            start: '',
            end: '',
            driverId: '',
            promo: {
                id: '',
                code: '',
                price: 0,
            },
            total: 0,
            driverPrice: 0,
            commissionPrice: 0,
            startLngLat: {
                lat: 0,
                lng: 0
            },
            endLngLat: {
                lat: 0,
                lng: 0
            },
            dist: 0
        })
        localStorage.removeItem("raceStart")
        localStorage.removeItem("raceEnd")
        localStorage.removeItem("raceDriverId")
        localStorage.removeItem("racePromo")
        localStorage.removeItem("raceTotal")
        localStorage.removeItem("raceDriverPrice")
        localStorage.removeItem("raceCommissionPrice")
    }

    function commandRace(pm, csrf) {
        const body = {
            destination: {
                start: raceInfo.start,
                end: raceInfo.end,
                startLng: raceInfo.startLngLat.lng,
                startLat: raceInfo.startLngLat.lat,
                endLng: raceInfo.endLngLat.lng,
                endLat: raceInfo.endLngLat.lat
            },
            driverPrice: parseInt((raceInfo.driverPrice * 100).toFixed(0)),
            commissionPrice: parseInt((raceInfo.commissionPrice * 100).toFixed(0)),
            promo: raceInfo.promo.id,
            driverId: raceInfo.driverId,
            total: parseInt((raceInfo.total * 100).toFixed(0)),
            pm,
            _csrf: csrf
        }

        return axios.post('race/add', body)
    }

    function getAllPending() {
        return axios.get('race/getAllPending')
    }


    return {
        raceInfo,
        setRace,
        setRaceInfo,
        unsetRace,
        commandRace,
        getAllPending
    }
}