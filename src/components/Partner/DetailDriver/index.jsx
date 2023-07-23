import React from "react";
import {
    Container,
    Div,
    DivProfil,
    Modal,
    DivText,
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
    const vehiculeType = [
        "Confort",
        "Van",
        "Hybride",
    ]

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
                                <p>{driver.num}</p>
                            </DivText>
                        </DivProfil>
                        <DivProfil $carInfo>
                            <DivText $info>
                                <p>
                                    <strong>Immatriculation: </strong>
                                    {driver.vehicule.immatriculation}
                                </p>
                                <p>
                                    <strong>Type de véhicule: </strong>
                                    {vehiculeType[driver.vehicule.type - 1]}
                                </p>
                                <p>
                                    <strong>Marque: </strong>
                                    {driver.vehicule.marque}
                                </p>
                                <p>
                                    <strong>Modèle: </strong>
                                    {driver.vehicule.model}
                                </p>
                                <p>
                                    <strong>Place: </strong>
                                    {driver.vehicule.places}
                                </p>
                            </DivText>
                        </DivProfil>
                        {
                            // ToDo : Rework the info detail component to be more reusable
                        }
                        <InfoDetail />
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