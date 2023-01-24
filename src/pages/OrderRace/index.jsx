import React, { useState } from "react";
import {
    ButtonOrder
} from "../../utils/Atoms";
import AddPayment from "../../components/AddPayment";
import RaceDetails from "../../components/RaceDetails";
import Map from "../../components/Map";
import { 
    ContainerOrder,
    Order,
    ChangeCard
} from "./atoms"
import RaceState from "../../components/RaceState";
import CarCards from "../../components/CarCards";

function OrderRace({}){

    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    

    const [isOpenDetails, setIsOpenDetails] = useState(false)
    const toggleIsOpenDetails = () => {
        setIsOpenDetails(!isOpenDetails)
    }

    

    return(
        <>
            <ContainerOrder>
                <Order>
                    <h2>Commandez une course</h2>
                    <RaceState/>
                    <CarCards/>
                    <ChangeCard  onClick={toggleIsOpen}>
                        <p>choisir un mode de paiement:</p>
                        <span>
                            Carte ****4857
                            <i className="ph-caret-right"></i>
                        </span>
                    </ChangeCard>
                    <AddPayment toggle={toggleIsOpen} isOpen={isOpen}/>
                    <RaceDetails toggle={toggleIsOpenDetails} isOpenDetails={isOpenDetails} />
                    <ButtonOrder onClick={toggleIsOpenDetails}>
                        Commandez la course
                    </ButtonOrder>
                </Order>
                <Map/>
            </ContainerOrder>
        </>
    )
}
export default OrderRace