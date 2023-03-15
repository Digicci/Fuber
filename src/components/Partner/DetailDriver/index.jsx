import React from "react";
import {
    Container,
    Div,
    DivProfil,
    Modal,
    DivText,
    Cards,
    Card,
    TopCard,
    BottomCard,
    Delete,
    DivDelete,

} from "./atoms";
import {    
    StyledClose,
    TitleModal,
} from "../../../utils/Atoms"
import profil from "../../../assets/driver/profile.webp"
import InfoDetail from "../InfoDetail";

function DetailDriver({toggle, isOpen}) {
    return (
        <>
            <Modal $isOpen={isOpen}>
                <Container>
                    <StyledClose onClick={toggle}>
                        <i className="ph-x closemenu"></i>
                    </StyledClose>
                    <TitleModal $titleDetails>
                        Détail du chauffeur
                    </TitleModal>
                    <Div>
                        <DivProfil>
                            <img src={profil} alt='Image de Profile'/>
                            <DivText>
                                <h6>Nom Prénom</h6>
                                <p>adresse</p>
                                <p>E-mail</p>
                                <p>Numéro de téléphone</p>
                            </DivText>
                        </DivProfil>
                        <InfoDetail/>
                        <DivDelete>
                            <Delete>
                                Supprimer le chauffeur
                            </Delete>
                        </DivDelete>
                    </Div>
                </Container>
            </Modal>
        </>
    )
}

export default DetailDriver;