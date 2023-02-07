import React, { useState } from "react";

import CarCard from "../CarCard";
import { useRace } from "../../../utils/hook/Client/useRace";
import Driver from "../../../utils/Data/Driver";
import {
    TypeChoiceCar,
} from "./atoms"




function CarCards(){

    const race = useRace()

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

    const [data,setData] = useState(Driver)

    return(
        <>
            <TypeChoiceCar>
                {
                    data.map((car) => {
                        return <CarCard {...car} handleClick={handleCarChoice}/>
                    })
                }
            </TypeChoiceCar>
        
        </>
    )
}
export default CarCards