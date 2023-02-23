import React from "react";
import {
    BlurContainer,
    Container,
    CardContainer,
    Title,
    Message,
    ButtonGroup,
    Button,
} from "./atoms";

import { useCard } from "../../../utils/hook/Client/useCard";
import { useCsrf } from "../../../utils/hook/useCsrf";
import {toast} from "react-toastify";

function FavoriteCardPopUp({visible, toggleVisible, card, setCards, setIsLoading}) {
    const {setDefault, getCards} = useCard()
    const csrf = useCsrf()
    const handleValidate = () => {
        toast.success('Carte favorite modifiée', {
            autoClose: 2000,
            icon: '👍'
        })
        setDefault(card.id).then((res) => {
            if (res.data === true) {
                getCards().then((res) => {
                    setCards(res.data)
                    setIsLoading(false)
                    csrf.getCsrfToken()
                })
            } else {
                setIsLoading(false)
            }
        })
        toggleVisible()
    }

    return(
        <>
            <BlurContainer $show={visible}>
                <Container>
                    <CardContainer>
                        <Title>Modifier la carte favorite</Title>
                    </CardContainer>
                    <CardContainer>
                        <Message>
                            Vous vous apprêtez à enregistrer la carte <strong>{card?.card.brand.toUpperCase()}</strong> se terminant par <strong>{card?.card.last4}</strong> comme carte favorite,<br/><br/>
                            souhaitez vous continuez ?
                        </Message>
                    </CardContainer>
                    <ButtonGroup>
                        <Button onClick={handleValidate}>Confirmer</Button>
                        <Button $cancel onClick={toggleVisible}>Annuler</Button>
                    </ButtonGroup>
                </Container>
            </BlurContainer>
        </>
    )
}

export default FavoriteCardPopUp;