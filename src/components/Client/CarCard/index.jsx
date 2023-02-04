import React from "react";
import {
    CarImg,
    CarType,
    InfoCar,
    Price
} from "./atoms"
import { useLocation } from "../../../utils/hook/useLocation";
import { useRace } from "../../../utils/hook/Client/useRace";


function CarCard({id, imgInfo, title, places, descriptionInfo, commission, handleClick}){
    const { dist } = useLocation()
    const race = useRace()
    const driverId = race.raceInfo.driverId
    const driverPrice = dist * descriptionInfo.price
    const driverCommission = driverPrice * commission
    const driverTotal = driverPrice + driverCommission

    return(


        <>
            <CarType key={id} onClick={() => handleClick(id, driverTotal, driverPrice, driverCommission)} $selected={driverId === id}>
                <CarImg src={imgInfo.img} alt={imgInfo.alt} />
                <InfoCar>
                    <h5>{title}</h5>
                    <span>
                        <i className="ph-users"></i>
                        {places}
                    </span>
                    <p>{descriptionInfo.vehicule}</p>
                    <p> {descriptionInfo.position} </p>
                </InfoCar>
                <Price>
                    <p> {driverTotal.toFixed(2)}€ </p>
                </Price>
            </CarType>
        </>
    )
}
export default CarCard