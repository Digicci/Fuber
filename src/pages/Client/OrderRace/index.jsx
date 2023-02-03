import React, { useState } from "react";
import {
    ButtonOrder
} from "../../../utils/Atoms";
import AddPayment from "../../../components/Client/AddPayment";
import RaceDetails from "../../../components/Client/RaceDetails";
import Map from "../../../components/Map";
import { ProvideCard } from "../../../utils/hook/useCard";
import {useAuth} from "../../../utils/hook/useAuth";
import { 
    ContainerOrder,
    Order,
    ChangeCard
} from "./atoms"
import RaceState from "../../../components/Client/RaceState";
import CarCards from "../../../components/Client/CarCards";


function OrderRace({}){

    const auth = useAuth()

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
                    {
                        auth.isConnected() && (
                            <ChangeCard  onClick={toggleIsOpen}>
                                <p>choisir un mode de paiement:</p>
                                <span>
                                    Carte ****4857
                                    <i className="ph-caret-right"></i>
                                </span>
                            </ChangeCard>
                        )
                    }
                    <ProvideCard>
                        <AddPayment toggle={toggleIsOpen} isOpen={isOpen}/>
                    </ProvideCard>
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