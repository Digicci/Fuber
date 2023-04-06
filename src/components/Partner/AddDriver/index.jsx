import React from "react";
import {    
    StyledClose,
    TitleModal,
    ContainerModal,
} from "../../../utils/Atoms"
import {
    Container,
    Modal
} from "./atoms"
import FormAddDriver from "../FormAddDriver";


function AddDriver({toggle, isOpen}){
    return(
        <>
            <Modal $modalDriver $isOpen={isOpen}>
                <Container>
                    <StyledClose onClick={toggle}>
                        <i className="ph-bold ph-x closemenu"></i>
                    </StyledClose>
                    <TitleModal>
                        Ajouter un chauffeur ?
                    </TitleModal>
                    <ContainerModal $addDriver>
                        <FormAddDriver/>
                    </ContainerModal>
                </Container>
            </Modal>
        </>
    )
}

export default AddDriver;