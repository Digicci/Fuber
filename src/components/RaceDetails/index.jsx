import React from "react";
import {
    StyledContainer,
    StyledClose,
    StyledModal,
    TitleModal,
    StyledInput,
    ButtonOrder
} from "../../utils/Atoms";
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


function RaceDetails({isOpenDetails, toggle}){

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
                            Comfort Hybride par Prenom I
                        </p>
                        <Details>
                            <InfoAdresse>
                                <Span $spanLeft>Adresse de départ :</Span>
                                <Span $spanRight>adresse</Span>
                            </InfoAdresse>
                            <InfoAdresse>
                                <Span $spanLeft>Adresse de départ :</Span>
                                <Span $spanRight>adresse</Span>
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
                                <span>13.50€</span>
                            </PanierInfo>
                            <PanierInfo>
                                <p>Code promo</p>
                                <span>0€</span>
                            </PanierInfo>
                            <PanierInfo>
                                <Total>Total</Total>
                                <TotalPrice>13.50€</TotalPrice>
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