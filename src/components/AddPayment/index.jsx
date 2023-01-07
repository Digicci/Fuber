import React, {useState} from "react";
import styled from "styled-components";
import {
    StyledContainer,
    StyledClose,
    StyledModal,
    StyledLink,
    ContainerModal
} from "../../utils/Atoms";
import AddCard from "../AddCard";
import AddPaypal from "../AddPaypal";


const TitleModal = styled.h5`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
`



function AddPayment({isOpen, toggle}){

    const [isAdd, setIsAdd] = useState(true)

    const toggleDisplay = (state) => {

        setIsAdd(state)
    }
    
    return(
        <>
            <StyledModal $modalPayment isOpen={isOpen} >
                <StyledContainer $modalHeight>
                    <StyledClose onClick={toggle}>
                        <i className="ph-x closemenu"></i>
                    </StyledClose>
                    <TitleModal>
                        Ajouter un moyen de paiement ?
                    </TitleModal>
                    <ContainerModal>
                    <StyledLink onClick={() => {toggleDisplay(true)}} $linkModal>
                        Carte
                    </StyledLink>
                    <StyledLink onClick={() => {toggleDisplay(false)}} $linkModal>
                        Paypal
                    </StyledLink>
                    </ContainerModal>
                    {
                        isAdd ? (<AddCard/>) : (<AddPaypal/>)
                    }
                </StyledContainer>
            </StyledModal>
        </>
    )

}

export default AddPayment