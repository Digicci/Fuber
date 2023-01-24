import React, {useState} from "react";
import NavProfile from "../../components/NavProfile";
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    StyledLink
} from "../../utils/Atoms";
import AddPayment from "../../components/AddPayment";
import {
    H3,
    ContainerCard,
    Card,
    CardInfo,
    CardText,
    AddText,
    AddIcon,
    ButtonDelete
} from "./atoms"

function Wallet(){

    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <>
            <ContainerProfile>
                <NavProfile activePage='wallet'/>
                <ContainerInfo>
                    <TitlePage>
                        Wallet
                    </TitlePage>
                    <H3>
                        Moyens de paiement enregistré
                    </H3>
                    <ContainerCard>
                       <Card>
                            <CardInfo>
                                <CardText>
                                    Visa
                                </CardText>
                                <CardText>
                                    01/25
                                </CardText>
                            </CardInfo>
                            <CardText $numberCard>
                                **** **** **** 4752
                            </CardText>
                        </Card>
                        <ButtonDelete>
                        Supprimer
                        </ButtonDelete> 
                    </ContainerCard>
                    <AddPayment toggle={toggleIsOpen} isOpen={isOpen} />
                    <StyledLink $addCard onClick={toggleIsOpen}>
                        <AddIcon className="ph-plus"></AddIcon>  
                        <AddText>
                            Ajouter un moyen de paiement 
                        </AddText>
                        
                    </StyledLink>
                </ContainerInfo>
            </ContainerProfile>
        </>
    )
}

export default Wallet