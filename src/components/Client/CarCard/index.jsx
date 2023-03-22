import React from "react";
import {
    CarImg,
    CarType,
    InfoCar,
    Price
} from "./atoms"
import { useRace } from "../../../utils/hook/Client/useRace";
import confort from "../../../assets/confort.webp";
import van from "../../../assets/van.webp";
import hybride from "../../../assets/hybride.webp";


function CarCard({id, img_path, places, prix, model, marque, distance, commission, handleClick}){
    const { raceInfo } = useRace()
    const dist = raceInfo.dist
    const race = useRace()
    const driverId = race.raceInfo.driverId
    const driverPrice = dist * prix
    const driverCommission = driverPrice * commission
    const driverTotal = driverPrice + driverCommission
    const imgInfo = {
        img: img_path === 'confort' ? confort : img_path === 'van' ? van : img_path === 'hybride' && hybride,
        alt: img_path === 'confort' ? "confort" : img_path === 'van' ? "van" : img_path === 'hybride' && "hybride"
    }
    return(


        <>
            <CarType key={id} onClick={() => handleClick(id, driverTotal, driverPrice, driverCommission)} $selected={driverId === id}>
                <CarImg src={imgInfo.img} alt={imgInfo.alt} />
                <InfoCar>
                    <span>
                        <i className="ph-users"></i>
                        {places}
                    </span>
                    <p>{marque.toUpperCase()} | {model}</p>
                    <p> distance :  {distance.toFixed(2)}km </p>
                </InfoCar>
                <Price>
                    <p> {driverTotal.toFixed(2)}€ </p>
                </Price>
            </CarType>
        </>
    )
}
export default CarCard