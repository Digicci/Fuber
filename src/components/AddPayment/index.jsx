import React, {useState} from "react";
import {
    StyledContainer,
    StyledClose,
    StyledModal,
    StyledLink,
    ContainerModal,
    TitleModal
} from "../../utils/Atoms";
import AddCard from "../AddCard";
import AddPaypal from "../AddPaypal";





function AddPayment({isOpen, toggle}){

    const [isAdd, setIsAdd] = useState(true)

    const toggleDisplay = (state) => {

        setIsAdd(state)
    }
    
    return(
        <>
            <StyledModal $modalPayment $isOpen={isOpen} >
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