import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import {
    StyledContainer,
    StyledClose,
    StyledModal,
    TitleModal,
    StyledInput,
    ButtonOrder
} from "../../utils/Atoms";

 const ModalDetails = styled.div`
    padding: 2rem .5rem 1rem;
    margin: 0 .5rem;
    border-bottom: 1px solid ${colors.fifth};
    p{
        display: flex;
        align-items: center;
        font-size: 1.05rem;
        font-weight: 600;
    }
    i{
        font-size: 1.25rem;
        margin-right: .5rem;
    }
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0 0;
    ${(props) =>
        props.$total &&
        `margin: 2.5rem 0 0 0`
    }
`
const InfoAdresse = styled.div`
    display: flex;
    justify-content: space-between;
    margin: .5rem 0;
`
const Span = styled.span`
    ${(props) =>
        props.$spanLeft &&
        `width: 40%;
        font-size:.85rem;
        font-weight: 600;`
    }
    ${(props) =>
        props.$spanRight &&
        `width: 60%;
        font-size: .8rem;
        overflow-wrap: break-word;`
    }
`
const Panier = styled.div`
    padding: .5rem;
`
const PanierInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .83rem;
    margin: .8rem;
    p{
        margin-bottom: 0;
    }
    span{
        margin-bottom: 0;
    }
`
const Total = styled.p`
    margin-bottom: 0;
    font-weight:600;
    font-size:.95rem;
`
const TotalPrice = styled.span`
    margin-bottom: 0;
    font-weight:600;
    font-size:.95rem;
`
const DivValider = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 0 0;
`

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