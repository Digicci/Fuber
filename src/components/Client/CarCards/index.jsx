import React, { useState, useEffect } from "react";

import CarCard from "../CarCard";
import { useRace } from "../../../utils/hook/Client/useRace";
import Driver from "../../../utils/Data/Client/Driver";
import {
    NoDriver,
    TypeChoiceCar,
} from "./atoms"
import { useAxios } from "../../../utils/hook/useAxios";
import { useLocation } from "../../../utils/hook/useLocation";
import { useCsrf } from "../../../utils/hook/useCsrf";
import {useAuth} from "../../../utils/hook/Client/useAuth";

function CarCards(){

    const race = useRace()
    const axios = useAxios()
    const location = useLocation()
    const csrf = useCsrf()
    const auth = useAuth()

    useEffect(() => {
        axios.post('user/getNearDrivers', {
            lat: location.location.lat,
            lng: location.location.lng,
            _csrf: csrf.token
        }).then((res) => {
            setData(res.data)
        }).catch((err) => {
            if(err.code === 401) {
                auth.signout()
            }
        })
    }, [])

    const handleCarChoice = (id, total, driverPrice, enterprise, nom, prenom,type) => {
        race.setRaceInfo({
            ...race.raceInfo,
            total: total,
            driverPrice: driverPrice,
            commissionPrice: enterprise,
            driverId: id,
            driverName: nom,
            driverSurname: prenom,
            type
        })
        console.log({total, driverPrice, enterprise, id, race: race.raceInfo}, type)
    }

    const [data,setData] = useState([])

    return(
        <>
            <TypeChoiceCar>
                {
                    data.length > 0 ? (
                        data.map((car) => {
                            return <CarCard key={car.id} {...car} handleClick={handleCarChoice}/>
                        })
                    ) : (
                        <NoDriver>
                            Veuillez nous excuser, aucun chauffeur n'est disponible pour le moment sur votre secteur.
                        </NoDriver>
                    )
                }
            </TypeChoiceCar>
        
        </>
    )
}
export default CarCards