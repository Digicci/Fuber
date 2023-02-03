import React, {useState, useEffect} from "react";
import {
    ContainerInfo,
    TitlePage,
    StyledLink
} from "../../../utils/Atoms";
import AddPayment from "../../../components/Client/AddPayment";
import {useCard} from "../../../utils/hook/useCard";
import {useCsrf} from "../../../utils/hook/useCsrf";
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
import {toast} from "react-toastify";

function Wallet(){

    const initialCard = []
    const [cards, setCards] = useState(initialCard)
    const [isLoading, setIsLoading] = useState(true)
    const { getCards, deleteCard } = useCard()
    const csrf = useCsrf()

    useEffect(() => {
        getCards().then((res) => {
            setCards(res.data)
            console.log(res.data)
            setIsLoading(false)
        })
    }, [])

    const handleDel = (pm) => {
        const id = toast.loading('Merci de patienter', { autoClose: false })
        setIsLoading(true)
        deleteCard(pm, csrf.token)
            .then((res) => {
                if (res.data === true) {
                    getCards().then((res) => {
                        setCards(res.data)
                        setIsLoading(false)
                        toast.update(id, {
                            type: "success",
                            render: "Moyen de paiement supprimé",
                            isLoading: false,
                            autoClose: 2000,
                            icon: "👌"
                        })
                        csrf.getCsrfToken()
                    })
                } else {
                    toast.update(id, {
                        type: "error",
                        render: "Une erreur est survenue",
                        isLoading: false,
                        autoClose: 2000,
                        icon: "🤔"
                    })
                    setIsLoading(false)
                }
            })
    }

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
                                                   <CardText $brand>
                                                       {card.card.brand}
                                                   </CardText>
                                                   <CardText>
                                                       {card.card.exp_month < 10 ? `0${card.card.exp_month}` : card.card.exp_month }/{card.card.exp_year}
                                                   </CardText>
                                               </CardInfo>
                                               <CardText $numberCard>
                                                   **** **** **** {card.card.last4}
                                               </CardText>
                                           </Card>
                                           <ButtonDelete onClick={() => { handleDel(card.id) }}>
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