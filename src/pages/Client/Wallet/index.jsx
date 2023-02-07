import React, {useState, useEffect} from "react";
import FavoriteCardPopUp from "../../../components/Client/FavoriteCardPopUp";
import {
    ContainerInfo,
    TitlePage,
    StyledLink
} from "../../../utils/Atoms";
import AddPayment from "../../../components/Client/AddPayment";
import {useCard} from "../../../utils/hook/Client/useCard";
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
    LoaderWrapper,
    ContainerCardFavorite
} from "./atoms"
import {Loader} from "../../../utils/Atoms";
import {toast} from "react-toastify";

function Wallet({isPopUp = false}) {

    const initialCard = []
    const [cards, setCards] = useState(initialCard)
    const [isLoading, setIsLoading] = useState(true)
    const {getCards, deleteCard, setDefault, defaultCard} = useCard()
    const csrf = useCsrf()
    const [isOpenFav, setIsOpenFav] = useState(false)
    const [cardToSet, setCardToSet] = useState(null)

    const toggleIsOpenFav = () => {
        setIsOpenFav(!isOpenFav)
    }

    const updateCartInfo = () => {
        getCards().then((res) => {
            setCards(res.data)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        updateCartInfo()
    }, [])

    const handleDel = (pm) => {
        const id = toast.loading('Merci de patienter', {autoClose: false})
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

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (card) => {
        setCardToSet(card)
        toggleIsOpenFav()
    }

    return (
        <>
            <ContainerInfo>

                <TitlePage>
                    Wallet
                </TitlePage>

                <H3>
                    Moyens de paiement enregistré
                </H3>


                {
                    isLoading ? (
                        <LoaderWrapper>
                            <Loader/>
                        </LoaderWrapper>
                    ) : (
                        cards.length === 0 ? (
                            <p>Aucun moyen de paiement enregistré</p>
                        ) : (<>

                                <AddText>Carte favorite</AddText>
                                {
                                    defaultCard && (
                                        <ContainerCardFavorite>
                                            <CardWrapper>
                                                <Card $favorite>
                                                    <CardInfo>
                                                        <CardText $brand>
                                                            {defaultCard.card.brand}
                                                        </CardText>
                                                        <CardText>
                                                            {defaultCard.card.exp_month < 10 ? `0${defaultCard.card.exp_month}` : defaultCard.card.exp_month}/{defaultCard.card.exp_year}
                                                        </CardText>
                                                        {defaultCard.isDefault && '*'}
                                                    </CardInfo>
                                                    <CardText $numberCard>
                                                        **** **** **** {defaultCard.card.last4}
                                                    </CardText>
                                                </Card>
                                            </CardWrapper>
                                        </ContainerCardFavorite>
                                    )
                                }

                            <>
                                <AddText>Autre carte  <small>(Cliquez sur une carte pour la définir comme
                                    favori)</small></AddText>
                                <ContainerCard $popUp={isPopUp}>
                                    {cards.map((card) => {
                                        return (
                                            card.id !== defaultCard?.id && (
                                                <CardWrapper>
                                                    <Card key={card.id} onClick={() => {
                                                        handleClick(card)
                                                    }}>
                                                        <CardInfo>
                                                            <CardText $brand>
                                                                {card.card.brand}
                                                            </CardText>
                                                            <CardText>
                                                                {card.card.exp_month < 10 ? `0${card.card.exp_month}` : card.card.exp_month}/{card.card.exp_year}
                                                            </CardText>
                                                        </CardInfo>
                                                        <CardText $numberCard>
                                                            **** **** **** {card.card.last4}
                                                        </CardText>
                                                    </Card>
                                                    <ButtonDelete onClick={() => {
                                                        handleDel(card.id)
                                                    }}>
                                                        Supprimer
                                                    </ButtonDelete>
                                                </CardWrapper>
                                            )
                                        )
                                    })}
                                </ContainerCard>
                            </>
                        </>)
                    )
                }


                <FavoriteCardPopUp
                    visible={isOpenFav}
                    card={cardToSet}
                    setCards={setCards}
                    setIsLoading={setIsLoading}
                    toggleVisible={toggleIsOpenFav}
                />

                <AddPayment toggle={toggleIsOpen} isOpen={isOpen} loading={setIsLoading} update={updateCartInfo}/>

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