import React, { useState, useEffect } from "react";

import CarCard from "../CarCard";
import { useRace } from "../../../utils/hook/Client/useRace";
import Driver from "../../../utils/Data/Client/Driver";
import {
    TypeChoiceCar,
} from "./atoms"
import { useAxios } from "../../../utils/hook/useAxios";
import { useLocation } from "../../../utils/hook/useLocation";
import { useCsrf } from "../../../utils/hook/useCsrf";

function CarCards(){

    const race = useRace()
    const axios = useAxios()
    const location = useLocation()
    const csrf = useCsrf()

    useEffect(() => {
        axios.post('user/getNearDrivers', {
            lat: location.location.lat,
            lng: location.location.lng,
            _csrf: csrf.token
        }).then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    const handleCarChoice = (id, total, driverPrice, enterprise) => {
        race.setRaceInfo({
            ...race.raceInfo,
            total: total,
            driverPrice: driverPrice,
            commissionPrice: enterprise,
            driverId: id
        })
        console.log({total, driverPrice, enterprise, id, race: race.raceInfo})
    }

    const [data,setData] = useState()

    return(
        <>
            <TypeChoiceCar>
                {
                    data?.map((car) => {
                        return <CarCard {...car} handleClick={handleCarChoice}/>
                    })
                }
            </TypeChoiceCar>
        
        </>
    )
}
export default CarCards