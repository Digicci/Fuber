import React, {useState, useEffect} from "react";
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { useCsrf } from "../../../utils/hook/useCsrf";
import { useValidator } from "../../../utils/hook/useValidator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Form,
    DivInput,
    Input,
    Button,
    DivSignin
} from "./atoms";

function FormAddDriver(){

    const authEntreprise = useAuthEntreprise()
    
    const [error, setError] = useState('')

    const csrf = useCsrf()

    const validator = useValidator()

    const navigate = useNavigate()

    const toastTimer = 2000

    const [entreprise, setEntreprise] = useState({
        nom: "",
        prenom: "",
        mail: "",
        tel: "",
        adresse: "",
        ville: "",
        cp: "",
        mdp: "",
        confirmMdp: "",
    });

    const formConfig = {
        nom: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z]+$/,
            },
        },
        prenom: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z]+$/,
            },
        },
        mail: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                email: true,
            },
        },
        tel: {
            rules: {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^[0-9]+$/,
            },
        },
        adresse: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[\dA-Za-z ]+[A-Za-z]+$/,
            },
        },
        ville: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z]+$/,
            },
        },
        cp: {
            rules: {
                required: true,
                minLength: 5,
                maxLength: 5,
                pattern: /^[0-9]+$/,
            },
        },
        mdp: {
            rules: {
                required: true,
                maxLength: 25,
                passwordPattern: true,
            },
        },
        confirmMdp: {
            rules: {
                required: true,
                maxLength: 25,
                passwordConfirm: true,
            },
        },
    };

    useEffect(() => {
        csrf.getCsrfToken()
        validator.registerForm(formConfig)
    }, [])

    function handleChange(e,field) {
        const state = {...entreprise}
        state[field] = e.target.value
        setEntreprise(state)
        validator.validate(field, e.target.value)
    }

    function validateForm(){
        for(const[key, field] of Object.entries(entreprise)){
            if(field === '' && key === ''){
                setError('Veuillez remplir tous les champs')
                return false
            }
        }

        setError('')
        return {
            nom: entreprise.nom,
            prenom: entreprise.prenom,
            mail: entreprise.mail,
            tel: entreprise.tel,
            adresse: entreprise.adresse,
            ville: entreprise.ville,
            cp: entreprise.cp,
            mdp: entreprise.mdp,
            confirmMdp: entreprise.confirmMdp,
            _crsf: csrf.token,
        }
    }

    function onSubmit(e){
        const toatsId = toast.loading('En cours de traitement...',
        {autoClose: false,})

        const data = validateForm()
        if(data){
            authEntreprise.register(data)
            .then((response) => {
                if(response.data){
                    setEntreprise({
                        nom: "",
                        prenom: "",
                        mail: "",
                        tel: "",
                        adresse: "",
                        ville: "",
                        cp: "",
                        mdp: "",
                        confirmMdp: "",
                    })
                    setError('')
                    toast.update(toatsId, {
                        render: 'Le compte chauffeur a bien été créé',
                        type: toast.TYPE.SUCCESS,
                        autoClose: toastTimer,
                        isLoading: false,
                        icon: '👌',
                    })
                    setTimeout(() => {
                        navigate('/partner/account/teams', {replace: true})
                    }, toastTimer)
                }
            })
            .catch((error) => {
                toast.update(toatsId, {
                    render: error.response.data,
                    type: toast.TYPE.ERROR,
                    autoClose: toastTimer,
                    isLoading: false,
                    icon: '🤔',
                })
                setEntreprise({
                    nom: "",
                    prenom: "",
                    mail: "",
                    tel: "",
                    adresse: "",
                    ville: "",
                    cp: "",
                    mdp: "",
                    confirmMdp: "",
                })
            })
        }else{
            toast.update(toatsId, {
                render: 'Veuillez remplir tous les champs',
                type: toast.TYPE.ERROR,
                autoClose: toastTimer,
                isLoading: false,
                icon: '🤔',
                closeOnClick: true,
                closeButton: true,
            })
        } 
    }


    return(

        <>
            <Form>
                <DivInput>
                    <Input type="text"
                    name="nom"
                    placeholder="Nom"
                    onChange={(e)=>{
                        handleChange(e,"nom")
                    }} />
                    
                </DivInput>
                <DivInput>
                    <Input type="text"
                    placeholder="Prénom"
                    name="prenom"
                    onChange={(e) => {
                        handleChange(e, "prenom")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Téléphone" 
                    name="tel"
                    onChange={(e) => {
                        handleChange(e, "tel")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Adresse"
                    name="adresse"
                    onChange={(e) => {
                        handleChange(e, "adresse")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Ville"
                    name="ville"
                    onChange={(e) => {
                        handleChange(e, "ville")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Code postal"
                    name="cp"
                    onChange={(e) => {
                        handleChange(e, "cp")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="email"
                    placeholder="Email"
                    name="mail"
                    onChange={(e) => {
                        handleChange(e, "mail")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="password"
                    placeholder="Mot de passe"
                    name="mdp"
                    onChange={(e) => {
                        handleChange(e, "mdp")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="password"
                    placeholder="Confirmer mot de passe"
                    name="confirmMdp"
                    onChange={(e) => {
                        handleChange(e, "confirmMdp")
                    }} />
                </DivInput>
                <DivSignin>
                    <Button
                    type="submit"
                    value="Envoyer">
                        Envoyer
                    </Button>
                </DivSignin>
            </Form>
        </>
    )
}

export default FormAddDriver;