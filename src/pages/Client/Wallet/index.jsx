import React, {useState, useEffect} from "react";
import {
    ContainerInfo,
    TitlePage,
    StyledLink
} from "../../../utils/Atoms";
import AddPayment from "../../../components/Client/AddPayment";
import {useCard} from "../../../utils/hook/useCard";
import {
    H3,
    ContainerCard,
    Card,
    CardInfo,
    CardText,
    AddText,
    AddIcon,
    ButtonDelete,
    CardWrapper,
    LoaderWrapper
} from "./atoms"
import {Loader} from "../../../utils/Atoms";

function Wallet(){

    const initialCard = []
    const [cards, setCards] = useState(initialCard)
    const [isLoading, setIsLoading] = useState(true)
    const { getCards } = useCard()

    useEffect(() => {
        getCards().then((res) => {
            setCards(res.data)
            setIsLoading(false)
        })
    }, [])

    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <>
            <ContainerInfo>

                <TitlePage>
                    Wallet
                </TitlePage>

                <H3>
                    Moyens de paiement enregistré
                </H3>

                <ContainerCard>

                    {
                       isLoading ? (
                            <LoaderWrapper>
                                <Loader/>
                            </LoaderWrapper>
                       ) : (
                           cards.length === 0 ? (
                                 <p>Aucun moyen de paiement enregistré</p>
                           ) : (
                               cards.map((card) => {
                                   return (
                                       <CardWrapper>
                                           <Card key={card.id}>
                                               <CardInfo>
                                                   <CardText>
                                                       {card.card.brand}
                                                   </CardText>
                                                   <CardText>
                                                       {card.card.exp_month }/{card.card.exp_year}
                                                   </CardText>
                                               </CardInfo>
                                               <CardText $numberCard>
                                                   **** **** **** {card.card.last4}
                                               </CardText>
                                           </Card>
                                           <ButtonDelete>
                                               Supprimer
                                           </ButtonDelete>
                                       </CardWrapper>
                                   )
                               })
                           )
                       )
                    }

                </ContainerCard>

                <AddPayment toggle={toggleIsOpen} isOpen={isOpen} />

                <StyledLink $addCard onClick={toggleIsOpen}>
                    <AddIcon className="ph-plus"></AddIcon>
                    <AddText>
                        Ajouter un moyen de paiement
                    </AddText>
                </StyledLink>

            </ContainerInfo>
        </>
    )
}

export default Wallet