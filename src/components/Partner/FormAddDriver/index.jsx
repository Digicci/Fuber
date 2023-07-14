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
    DivSignin,
    Select
} from "./atoms";
import CarType from "../../../utils/Data/Partner/CarType";
import OptionCarType from "../OptionCarType";

function FormAddDriver(){

    const authEntreprise = useAuthEntreprise()
    
    const [error, setError] = useState('')

    const csrf = useCsrf()

    const validator = useValidator()

    const navigate = useNavigate()

    const [data , setData] = useState(CarType)

    const toastTimer = 2000

    const [slider, setSlider] = useState(true)

    const toogleSlider = () => {
        setSlider(!slider)
    }

    const initialState = {
        nom: "",
        prenom: "",
        mail: "",
        tel: "",
        adresse: "",
        ville: "",
        cp: "",
        mdp: "",
        confirmMdp: "",
        car: "",
        immatriculation: "",
        marque: "",
        modele: "",
        place: "",
    }

    const [entreprise, setEntreprise] = useState(initialState);

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
            if(field === ''){
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
            car: entreprise.car,
            immatriculation: entreprise.immatriculation,
            modele: entreprise.modele,
            marque: entreprise.marque,
            place: entreprise.place,
            _csrf: csrf.token,
        }
    }

    function onSubmit(e){
        e.preventDefault()
        const toatsId = toast.loading('Enregistrement en cour...',
        {autoClose: false,})

        const data = validateForm()
        if(data){
            authEntreprise.register(data)
            .then((response) => {
                if(response.data){
                    setError('')
                    toast.update(toatsId, {
                        render: 'Le compte chauffeur a bien été créé',
                        type: toast.TYPE.SUCCESS,
                        autoClose: toastTimer,
                        isLoading: false,
                        icon: '👌',
                    })
                    setTimeout(() => {
                        navigate('/partner/account/team', {replace: true})
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
                setEntreprise(initialState)
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
            <Form $slider={!slider} >
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
                    type="button"
                    value="Suivant"
                    onClick={toogleSlider}
                    >
                        Suivant
                    </Button>
                </DivSignin>
            </Form>
            
            <Form $slider={slider}>
                <DivSignin $carInfo>
                    <Button $cancel
                    type="button"
                    value="Retour"
                    onClick={toogleSlider}
                    >
                        <i class="ph-bold ph-arrow-fat-left"></i>
                    </Button>
                </DivSignin>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Imatriculation"
                    name="imatriculation"
                    onChange={(e) => {
                        handleChange(e, "imatriculation")
                    }} />
                </DivInput>
                <Select name="car">
                    <option value="0">Type de véhicule</option>
                    {
                        data.map((type) => {
                            return <OptionCarType key={type.value} {...type} onClick={(e) => {
                                handleChange(e, "car")
                            }}/>
                        })
                    }
                </Select>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Marque"
                    name="marque"
                    onChange={(e) => {
                        handleChange(e, "marque")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Modèle"
                    name="modele"
                    onChange={(e) => {
                        handleChange(e, "modele")
                    }} />
                </DivInput>
                <DivInput>
                    <Input
                    type="text"
                    placeholder="Nombre de place"
                    name="place"
                    onChange={(e) => {
                        handleChange(e, "place")
                    }} />
                </DivInput>

                <DivSignin>
                    <Button
                    type="submit"
                    value="Envoyer"
                    onClick={onSubmit}
                    >
                        Envoyer
                    </Button>
                </DivSignin>
            </Form>
        </>
    )
}

export default FormAddDriver;