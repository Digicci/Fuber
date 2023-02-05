import React, { useState, useEffect } from "react";
import {
    ButtonOrder
} from "../../../utils/Atoms";
import AddPayment from "../../../components/Client/AddPayment";
import RaceDetails from "../../../components/Client/RaceDetails";
import Map from "../../../components/Map";
import { ProvideCard } from "../../../utils/hook/Client/useCard";
import {useAuth} from "../../../utils/hook/Client/useAuth";
import { useCard } from "../../../utils/hook/Client/useCard";
import { useLocation } from "../../../utils/hook/useLocation";
import { useRace } from "../../../utils/hook/Client/useRace";
import { 
    ContainerOrder,
    Order,
    ChangeCard
} from "./atoms"
import RaceState from "../../../components/Client/RaceState";
import CarCards from "../../../components/Client/CarCards";
import WalletPopUp from "../../../components/Client/WalletPopUp";


function OrderRace({}){

    const auth = useAuth()

    const card = useCard()

    const location = useLocation()

    const race = useRace()

    useEffect(() => {
        card.getCards()
    }, [])


    const [isOpenWallet,setIsOpenWallet] = useState(false)

    const toggleIsOpenCard = () => {
        setIsOpenWallet(true)
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
                    {
                        location.dist !== 0 && (
                            <CarCards/>
                        )
                    }
                    {
                        auth.isConnected() && (
                            <ChangeCard  onClick={toggleIsOpenCard}>
                                <p>choisir un mode de paiement:</p>
                                {
                                    card.defaultCard ? (
                                        <span>
                                            Carte ****{card.defaultCard.card?.last4}
                                                    <i className="ph-caret-right"></i>
                                        </span>
                                    ) : (
                                        <span>
                                            Choisir une carte par défaut
                                            <i className="ph-caret-right"></i>
                                        </span>
                                    )
                                }
                            </ChangeCard>
                        )
                    }
                    <WalletPopUp open={isOpenWallet} setOpen={setIsOpenWallet}/>
                    <RaceDetails toggle={toggleIsOpenDetails} isOpenDetails={isOpenDetails} />
                    <ButtonOrder onClick={toggleIsOpenDetails} disabled={!location.asJourney} $disabled={!location.asJourney || !race.raceInfo.driverId}>
                        Commandez la course
                    </ButtonOrder>
                </Order>
                <Map/>
            </ContainerOrder>
        </>
    )
}
export default OrderRace