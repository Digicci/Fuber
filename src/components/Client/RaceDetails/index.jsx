import React from "react";
import {
    StyledContainer,
    StyledClose,
    StyledModal,
    TitleModal,
    StyledInput,
    ButtonOrder
} from "../../../utils/Atoms";
import {
    ModalDetails,
    Details,
    InfoAdresse,
    Span,
    Panier,
    PanierInfo,
    Total,
    TotalPrice,
    DivValider
} from "./atoms"
import { useRace } from "../../../utils/hook/Client/useRace";
import { useCard } from "../../../utils/hook/Client/useCard";
import {useCsrf} from "../../../utils/hook/useCsrf";
import Driver from "../../../utils/Data/Client/Driver";
import {toast} from "react-toastify";



function RaceDetails({isOpenDetails, toggle}){

    const race = useRace()
    const card = useCard()
    const csrf = useCsrf()
    const DriverInfo = Driver.find((d) => {
        if(d.id === race.raceInfo.driverId) {
            return d
        }
    })

    const handleOrder = () => {
        race.commandRace(card.defaultCard.id, csrf.token).then((res) => {
          if (res.data.message === "success")  {
              toast.success("Commande effectuée avec succès", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    icon: '🚗'
              })
              race.unsetRace()
              toggle()
          } else {
                toast.error("Une erreur est survenue, merci de changer de carte et de réessayer", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        icon: "🤔"
                })
                toggle()
          }
        })
    }

    return(
        <>
            <StyledModal $modalPayment $isOpen={isOpenDetails} >
                <StyledContainer $modalHeight $modalDetails>
                    <StyledClose onClick={toggle}>
                        <i className="ph-x closemenu"></i>
                    </StyledClose>
                    <TitleModal $titleDetails>
                        Détails de la course
                    </TitleModal>
                    <ModalDetails>
                        <p>
                            <i className="ph-car"></i>
                            {DriverInfo?.title ? DriverInfo.title.toUpperCase() : ''} par Prenom I
                        </p>
                        <Details>
                            <InfoAdresse>
                                <Span $spanLeft>Adresse de départ :</Span>
                                <Span $spanRight>{race.raceInfo.start ?? ''}</Span>
                            </InfoAdresse>
                            <InfoAdresse>
                                <Span $spanLeft>Adresse de d'arrivée </Span>
                                <Span $spanRight>: {race.raceInfo.end ?? ''}</Span>
                            </InfoAdresse>
                        </Details>
                    </ModalDetails>
                    <Panier>
                        <StyledInput
                        $inputAddCard
                        type="text"
                        placeholder="Ajouter un code promo"
                        name="code">
                        </StyledInput>
                        <Details $total>
                            <PanierInfo>
                                <p>Sous-total</p>
                                <span>{
                                    race.raceInfo.total && race.raceInfo.dist ?
                                        race.raceInfo.total.toFixed(2)
                                        : 0
                                    }€
                                </span>
                            </PanierInfo>
                            <PanierInfo>
                                <p>Code promo</p>
                                <span>{race.raceInfo.promo.price ?? 0}€</span>
                            </PanierInfo>
                            <PanierInfo>
                                <Total>Total</Total>
                                <TotalPrice>
                                    {
                                        race.raceInfo.dist ?
                                            (
                                                race.raceInfo.promo.price ?
                                                    ( race.raceInfo.total.toFixed(2) - race.raceInfo.promo.price ).toFixed(2)
                                                    :
                                                    race.raceInfo.total.toFixed(2)
                                            ) : 0
                                    }€
                                </TotalPrice>
                            </PanierInfo>
                        </Details>
                        <DivValider>
                            <ButtonOrder onClick={handleOrder}>
                            Commandez la course
                            </ButtonOrder>
                        </DivValider>
                    </Panier>
                </StyledContainer>
            </StyledModal>
        </>
    )
}

export default RaceDetails