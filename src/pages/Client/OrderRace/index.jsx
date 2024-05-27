import React, { useState, useEffect } from "react";
import {
    ButtonOrder
} from "../../../utils/Atoms";
import RaceDetails from "../../../components/Client/RaceDetails";
import Map from "../../../components/Map";
import {useAuth} from "../../../utils/hook/Client/useAuth";
import { useCard } from "../../../utils/hook/Client/useCard";
import { useLocation } from "../../../utils/hook/useLocation";
import { useRace } from "../../../utils/hook/Client/useRace";
import {
    ContainerOrder,
    Order,
    ChangeCard,
    WarningInfo,
} from "./atoms"
import RaceState from "../../../components/Client/RaceState";
import CarCards from "../../../components/Client/CarCards";
import WalletPopUp from "../../../components/Client/WalletPopUp";
import LoginPopUp from "../../../components/Client/LoginPopUp";
import {useNavigate} from "react-router-dom";


function OrderRace({}){

    const auth = useAuth()

    const card = useCard()

    const location = useLocation()

    const race = useRace()

    const navigate = useNavigate()

    // Si l'utilisateur est connecté, on récupère ses cartes de paiement
    useEffect(() => {
        if (auth.isConnected()) {
            card.getCards().catch((err) => {
                if(err.code === 401) {
                    auth.signout()
                    navigate('/login', {replace: true})
                }
            })
        }
    }, [])


    const [isOpenWallet,setIsOpenWallet] = useState(false)
    const toggleIsOpenCard = () => {
        setIsOpenWallet(true)
    }

    const [isOpenDetails, setIsOpenDetails] = useState(false)
    const toggleIsOpenDetails = () => {
        setIsOpenDetails(!isOpenDetails)
    }

    const [openLogin, setOpenLogin] = useState(false)
    const toggleOpenLogin = () => {
        setOpenLogin(!openLogin)
    }



    return(
        <>
            <ContainerOrder>
                <Order>
                    <h2>Commandez une course</h2>
                    <RaceState/>
                    {
                        location.asJourney && (
                            <CarCards/>
                        )
                    }
                    {
                        auth.isConnected() ? (
                            <ChangeCard  onClick={toggleIsOpenCard}>
                                <p>choisir un mode de paiement:</p>
                                {
                                    card.defaultCard ? (
                                        <span>
                                            Carte ****{card.defaultCard.card?.last4}
                                                    <i className="ph-bold ph-caret-right"></i>
                                        </span>
                                    ) : (
                                        <span>
                                            Choisir une carte par défaut
                                            <i className="ph-bold ph-caret-right"></i>
                                        </span>
                                    )
                                }
                            </ChangeCard>
                        ) : (
                            <WarningInfo>Vous devez être connecté pour pouvoir commandez une course</WarningInfo>
                        )
                    }
                    <WalletPopUp open={isOpenWallet} setOpen={setIsOpenWallet}/>
                    {
                        isOpenDetails && (
                            <RaceDetails toggle={toggleIsOpenDetails} isOpenDetails={isOpenDetails} />
                        )
                    }
                    <LoginPopUp open={openLogin} setOpen={setOpenLogin}/>
                    {
                        auth.isConnected() ?
                            (
                                <ButtonOrder onClick={toggleIsOpenDetails} disabled={!location.asJourney || !race.raceInfo.driverId || !auth.isConnected() || !card.defaultCard} $disabled={!location.asJourney || !race.raceInfo.driverId || !auth.isConnected() || !card.defaultCard}>
                                    Commandez la course
                                </ButtonOrder>
                            )
                            :
                            (
                                <ButtonOrder onClick={toggleOpenLogin} disabled={auth.isConnected()} $disabled={auth.isConnected()}>
                                    Se connecter
                                </ButtonOrder>
                            )
                    }
                </Order>
                <Map/>
            </ContainerOrder>
        </>
    )
}
export default OrderRace