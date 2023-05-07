import React from "react";
import {    
    StyledClose,
    TitleModal,
} from "../../../utils/Atoms"
import {
    Container,
    Modal,
    ContainerModal,
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
                    <ContainerModal>
                        <FormAddDriver/>
                    </ContainerModal>
                </Container>
            </Modal>
        </>
    )
}

export default AddDriver;