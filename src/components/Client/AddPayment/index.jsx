import React, {useEffect, useState} from "react";
import {
    StyledContainer,
    StyledClose,
    StyledModal,
    StyledLink,
    ContainerModal,
    TitleModal
} from "../../../utils/Atoms";
import AddCard from "../AddCard";
import AddPaypal from "../AddPaypal";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {useCard} from "../../../utils/hook/Client/useCard";
import { useCsrf } from "../../../utils/hook/useCsrf";


const stripePromise = loadStripe('pk_test_51MP9laGtIjyGGRoGpaBalxu4QM8MJnTztna8yCbYAdiO8ffs8VCVjVtcu1kAUzAF0xQnCjQlmb2ajQrQVB92QXd500UbrRxxFH')



function AddPayment({isOpen, toggle, loading, update}){
    const {getUserToken} = useCard()
    const csrf = useCsrf()

    const [isAdd, setIsAdd] = useState(true)
    const [stripeOptions, setStripeOptions] = useState(null)

    const toggleDisplay = (state) => {

        setIsAdd(state)
    }

    const handleClientSecret = (res) => {
        const client_secret = res.data.client_secret
        setStripeOptions({
            clientSecret: client_secret,
            appearance: {
                theme: 'flat',
                layout: 'accordion'
            }
        })
        csrf.getCsrfToken()
    }


    useEffect(() => {
        if (!csrf.token) {
            csrf.getCsrfToken()
        }
        getUserToken().then((res) => {
            handleClientSecret(res)
        })
    }, [])
    
    return(
        <>
            <StyledModal $modalPayment $isOpen={isOpen} >
                <StyledContainer $modalHeight>
                    <StyledClose onClick={toggle}>
                        <i className="ph-bold ph-x closemenu"></i>
                    </StyledClose>
                    <TitleModal>
                        Ajouter un moyen de paiement ?
                    </TitleModal>
                    <ContainerModal>
                    <StyledLink onClick={() => {toggleDisplay(true)}} $linkModal>
                        Carte
                    </StyledLink>
                    </ContainerModal>
                    {
                        stripeOptions && (
                            <Elements stripe={stripePromise} options={stripeOptions}>
                                <AddCard update={update} loading={loading} close={toggle} updateSecret={handleClientSecret}/>
                            </Elements>
                        )
                    }
                </StyledContainer>
            </StyledModal>
        </>
    )

}

export default AddPayment