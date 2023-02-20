import React, {useState, useEffect} from "react";
import { StyledInput } from "../../../utils/Atoms";
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { useCsrf } from "../../../utils/hook/useCsrf";
import { useValidator } from "../../../utils/hook/useValidator";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ContainerForm,
    Select,
    Error,
} from "./atoms";

function FormSignin(){

    const authEntreprise = useAuthEntreprise()

    const [error, setError] = useState('')

    const csrf = useCsrf()

    const validator = useValidator()

    const navigate = useNavigate()

    const toastTimer = 2000

    const [entreprise, setEntreprise] = useState({
        nomCommercial: "",
        siret: "",
        adresse: "",
        ville: "",
        cp: "",
        complement: "",
        nom: "",
        prenom: "",
        tel: "",
        mail: "",
        mdp: "",
        confirmMdp: "",
    });

    const formConfig = {
        nomCommercial: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z\d&_\-. ]+$/,
            }
        },
        siret: {
            rules: {
                required: true,
                minLength: 14,
                maxLength: 14,
                siret: true,
        }
        },
        adresse: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 50,
                pattern: /^[\dA-Za-z ]+[A-Za-z]+$/,
            }
        },
        ville: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z][A-Za-z\d\-]+$/,
            }
        },
        cp: {
            rules: {
                required: true,
                minLength: 5,
                maxLength: 5,
                pattern: /^[0-9]+$/,
            }
        },
        complement: {
            rules: {
                minLength: 0,
                maxLength: 10,
                pattern: /^[\d A-Za-z]+$/,
            }
        },
        nom: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z]+$/,
            }
        },
        prenom: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /^[A-Za-z]+$/,
            }
        },
        tel: {
            rules: {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^[0-9]+$/,
            }
        },
        mail: {
            rules: {
                required: true,
                minLength: 3,
                maxLength: 25,
                email: true,
            }
        },
        mdp: {
            rules: {
                required: true,
                maxLength: 25,
                passwordPattern: true,
            },
            value: entreprise.mdp,
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
        for (const[key, field] of Object.entries(entreprise)){
            if(field === '' && key !== 'complement'){
                setError('Veuillez remplir tous les champs')
                return false
            }
        }
        
        setError('')
        return{
            nomCommercial: entreprise.nomCommercial,
            siret: entreprise.siret,
            adresse: entreprise.adresse,
            ville: entreprise.ville,
            cp: entreprise.cp,
            complement: entreprise.complement,
            nom: entreprise.nom,
            prenom: entreprise.prenom,
            tel: entreprise.tel,
            mail: entreprise.mail,
            mdp: entreprise.mdp,
            _csrf: csrf.token,
        }
    }
    
    function onSubmit(e){
        const toatsId = toast.loading('En cours de traitement...', {autoClose: false})
        
        const data = validateForm()
        if(data){
            authEntreprise.signup(data)
            .then((response) => {
                if(response.data){
                    setEntreprise({
                        nomCommercial: '',
                        siret: '',
                        adresse: '',
                        ville: '',
                        cp: '',
                        complement: '',
                        nom: '',
                        prenom: '',
                        tel: '',
                        mail: '',
                        mdp: '',
                        confirmMdp: '',
                    })
                    setError('')
                    toast.update(toatsId, {
                        render: 'Inscription réussie',
                        type: toast.TYPE.SUCCESS,
                        autoClose: toastTimer,
                        isLoading: false,
                        icon: '👌',
                    })
                    setTimeout(() => {
                        navigate('/partner/login',{replace: true})
                    }, toastTimer)
                }
            })
            .catch((error) => {
                toast.update(toatsId, {
                    render: error.response.data,
                    type: 'error',
                    autoClose: 5000,
                    isLoading: false,
                    icon: '🤔',
                })
                setEntreprise({
                    nomCommercial: '',
                    siret: '',
                    adresse: '',
                    ville: '',
                    cp: '',
                    complement: '',
                    nom: '',
                    prenom: '',
                    tel: '',
                    mail: '',
                    mdp: '',
                    confirmMdp: '',
                })
            })
        }else{
            toast.update(toatsId, {
                render: 'Veuillez remplir tous les champs',
                type: 'error',
                autoClose: 5000,
                isLoading: false,
                icon: '🤔',
                className:'rotateY animated',
                closeOnClick: true,
                closeButton: true,
            })
        }
    }


    return(
        <>
            <ContainerForm>
                <h2>Lancez-vous !</h2>
                <StyledInput $signinDriver
                name="nomCommercial"
                type="text"
                placeholder="Nom entreprise*"
                onChange={(e) => {
                    handleChange(e, 'nomCommercial')
                }}
                value={entreprise.nomCommercial}
                required
                />
                {validator.errors.nomCommercial && <Error>
                {validator.errors.nomCommercial}</Error>}

                <StyledInput $signinDriver
                name="siret"
                type="text"
                placeholder="N°Siret/Siren*"
                onChange={(e) => {
                    handleChange(e, 'siret')
                }}
                value={entreprise.siret}
                required
                />
                {validator.errors.siret && <Error>
                {validator.errors.siret}</Error>}

                <StyledInput $signinDriver
                name="adresse"
                type="text"
                placeholder="Adresse*"
                onChange={(e) => {
                    handleChange(e, 'adresse')
                }}
                value={entreprise.adresse}
                required
                />
                {validator.errors.adresse && <Error>
                {validator.errors.adresse}</Error>}

                <StyledInput $signinDriver
                name="ville"
                type="text"
                placeholder="Ville*"
                onChange={(e) => {
                    handleChange(e, 'ville')
                }}
                value={entreprise.ville}
                required
                />
                {validator.errors.ville && <Error>
                {validator.errors.ville}</Error>}

                <StyledInput $signinDriver
                name="cp"
                type="text"
                placeholder="Code postal*"
                onChange={(e) => {
                    handleChange(e, 'cp')
                }}
                value={entreprise.cp}
                required
                />
                {validator.errors.cp && <Error>
                {validator.errors.cp}</Error>}

                <StyledInput $signinDriver
                name="complement"
                type="text"
                placeholder="Etage/Suite(facultatif)"
                onChange={(e) => {
                    handleChange(e, 'complement')
                }}
                value={entreprise.complement}
                />
                {validator.errors.complement && <Error>
                {validator.errors.complement}</Error>}

                <StyledInput $signinDriver
                name="nom"
                type="text"
                placeholder="Nom*"
                onChange={(e) => {
                    handleChange(e, 'nom')
                }}
                value={entreprise.nom}
                required
                
                />
                {validator.errors.nom && <Error>
                {validator.errors.nom}</Error>}

                <StyledInput $signinDriver
                name="prenom"
                type="text"
                placeholder="Prénom*"
                onChange={(e) => {
                    handleChange(e, 'prenom')
                }}
                value={entreprise.prenom}
                required
                />
                {validator.errors.prenom && <Error>
                {validator.errors.prenom}</Error>}

                <StyledInput $signinDriver
                name="tel"
                type="text"
                placeholder="Numéro de téléphone*"
                onChange={(e) => {
                    handleChange(e, 'tel')
                }}
                value={entreprise.tel}
                required
                />
                {validator.errors.tel && <Error>
                {validator.errors.tel}</Error>}

                <StyledInput $signinDriver
                name="mail"
                type="email"
                placeholder="Adresse e-mail*"
                onChange={(e) => {
                    handleChange(e, 'mail')
                }}
                value={entreprise.mail}
                required
                />
                {validator.errors.mail && <Error>
                {validator.errors.mail}</Error>}
                <StyledInput $signinDriver
                name="mdp"
                type="password"
                placeholder="Mot de passe*"
                onChange={(e) => {
                    handleChange(e, 'mdp')
                }}
                value={entreprise.mdp}
                required
                />
                {validator.errors.mdp && <Error>
                {validator.errors.mdp}</Error>}

                <StyledInput $signinDriver
                name="confirmMdp"
                type="password"
                placeholder="Confirmer le mot de passe"
                onChange={(e) => {
                    handleChange(e, 'confirmMdp')
                }}
                value={entreprise.confirmMdp}
                required
                />
                {validator.errors.confirmMdp && <Error>
                {validator.errors.confirmMdp}</Error>}

                <Error>{error}</Error>
                <StyledInput
                $submit 
                $connecter 
                type="submit" 
                value="Envoyer"
                onClick={onSubmit}
                />
            </ContainerForm>
        </>
    )
}

export default FormSignin