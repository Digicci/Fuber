import React, {useState, useEffect} from "react";
import {useStripe} from "@stripe/react-stripe-js";

function Success() {
    const stripe = useStripe();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get('client_secret');

        if (!clientSecret) {
            return;
        }

        stripe
            .retrieveSetupIntent(clientSecret)
            .then(({setupIntent}) => {
                switch(setupIntent.status) {
                    case 'succeeded':
                        setMessage('Méthode de paiement ajoutée !');
                        break;

                    case 'requires_payment_method':
                        setMessage('La carte a été refusée, veuillez réessayer avec une autre carte.');
                        break;

                    case 'processing':
                        setMessage('La carte est en cours de vérification, merci de patienter.');
                        break;

                    default:
                        setMessage('Une erreur est survenue, veuillez réessayer.');
                }
            })
    }, [stripe])

    return message

}

export default Success