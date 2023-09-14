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

function DetailDriver({toggle, isOpen, driver}) {
    return (
        <>
            <Modal $isOpen={isOpen}>
                <Container>
                    <StyledClose onClick={toggle}>
                        <i className="ph-bold ph-x closemenu"></i>
                    </StyledClose>
                    <TitleModal $titleDetails>
                        Détail du chauffeur
                    </TitleModal>
                    <Div>
                        <DivProfil>
                            <img src={profil} alt='Image de Profile'/>
                            <DivText>
                                <h6>{driver.nom} {driver.prenom}</h6>
                                <p>{driver.adresse}</p>
                                <p>{driver.mail}</p>
                                <p>{driver.tel}</p>
                            </DivText>
                        </DivProfil>
                        <DivProfil $carInfo>
                            <DivText $info>
                                {
                                    driver.vehicule ? (
                                        <>
                                            <p>
                                                <strong>Immatriculation: </strong>
                                                {driver.vehicule?.immatriculation}
                                            </p>
                                            <p>
                                                <strong>Type de véhicule: </strong>
                                                {driver.vehicule?.type}
                                            </p>
                                            <p>
                                                <strong>Marque: </strong>
                                                {driver.vehicule?.marque}
                                            </p>
                                            <p>
                                                <strong>Modèle: </strong>
                                                {driver.vehicule?.model}
                                            </p>
                                            <p>
                                                <strong>Place: </strong>
                                                {driver.vehicule?.places}
                                            </p>
                                        </>
                                    ) : (
                                        <p>Ce chauffeur n'a pas de véhicule.</p>
                                    )
                                }
                            </DivText>
                        </DivProfil>
                        <InfoDetail driver={driver}/>
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