import React from "react";
import {
    CarImg,
    CarType,
    InfoCar,
    Price
} from "./atoms"



function CarCard({imgInfo, title, places, descriptionInfo}){
    

    return(
        <>
            <CarType>
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
                    <p> {descriptionInfo.price} </p>
                </Price>
            </CarType>
        </>
    )
}
export default CarCard