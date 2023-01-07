import React, {useState} from "react";
import styled from "styled-components";
import NavProfile from "../../components/NavProfile";
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    StyledLink
} from "../../utils/Atoms";
import colors from "../../colors";
import AddPayment from "../../components/AddPayment";

const H3 = styled.h3`
    font-size: 1.5rem;
    margin: 4rem 0;
    font-weight: 100;
`
const ContainerCard = styled.div`
    display: flex;
`
const Card =styled.div`
    width: 30%;
    height: auto;
    background: ${colors.fourth};
    border: 1px solid ${colors.fifth};
    border-radius: 10px;
    padding: 1rem .5rem;
    margin-right: 2rem;
`
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .95rem;
`
const CardText = styled.p`
    margin: 0 0 1rem 0 ;
    ${(props) =>
        props.$numberCard &&
        `margin: 2rem 0;
        font-size: 1.5rem;
        `
    }
`
const AddText =  styled.span`
    font-size: 1.05rem;
    font-weight: 600;
    padding-left: 5px;
`
const AddIcon = styled.i`
    font-size: 1.5rem;
`

function Wallet(){

    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <>
            <ContainerProfile>
                <NavProfile/>
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
                        <StyledLink $deleteWallet>
                        Supprimer
                        </StyledLink> 
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