import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    StyledForm,
    StyledInput,
    StyledContainerInput,
} from "../../../utils/Atoms";
import {useStripe, useElements, PaymentElement} from "@stripe/react-stripe-js";
import {
    ContainerForm,
} from "./atoms"
import Success from "../Success";
import {toast} from "react-toastify";

function AddCard(){
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const toastId = toast.loading('Ajout de la carte en cours...')
        stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/account/wallet/'
            },
            redirect: 'if_required'
        }).then((res) => {
            if (res.error) {
                setError(res.error)
            }
            else {
                console.log(res)
                toast.update(toastId, {
                    render: 'Carte ajoutée !',
                    type: 'success',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    icon: '👍',
                    isLoading: false
                })
                navigate('/account/profile', {replace: true})
            }
        }).catch((err) => {
            console.log(err)
            toast.update(toastId, {
                render: 'Une erreur est survenue',
                type: 'error',
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                icon: '🤔',
                isLoading: false
            })
        })
    }

    return(
        <>
            <ContainerForm>
                <StyledForm onSubmit={handleSubmit} $formAddCard>
                    <PaymentElement />
                    <StyledContainerInput $containerFormCard>
                        <StyledInput $submit $colorAddCard
                        type='submit'
                        value="Ajouter carte"
                        ></StyledInput>
                    </StyledContainerInput>
                    {error && <div>{error.message}</div>}
                </StyledForm>
                <Success />
            </ContainerForm>
        </>
    )
}
export default AddCard