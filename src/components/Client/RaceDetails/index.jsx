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
import { useLocation } from "../../../utils/hook/useLocation";
import Driver from "../../../utils/Data/Driver";



function RaceDetails({isOpenDetails, toggle}){

    const race = useRace()
    const location = useLocation()
    const DriverInfo = Driver.find((d) => {
        if(d.id === race.raceInfo.driverId) {
            return d
        }
    })

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
                                <Span $spanLeft>Adresse de d'arrivée :</Span>
                                <Span $spanRight>{race.raceInfo.end ?? ''}</Span>
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
                                    race.raceInfo.total && location.dist ?
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
                                        location.dist ?
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
                            <ButtonOrder>
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