import React, {useState, useEffect} from "react";
import {useAuthEntreprise} from "../../../utils/hook/Partner/useAuthEntreprise";
import {useCsrf} from "../../../utils/hook/useCsrf";
import {useValidator} from "../../../utils/hook/useValidator";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {
    Form,
    DivInput,
    Input,
    Button,
    DivSignin,
    Select,
    Error,
} from "./atoms";
import CarType from "../../../utils/Data/Partner/CarType";
import OptionCarType from "../OptionCarType";
import {formConfig} from "./config";


function FormAddDriver() {

    const authEntreprise = useAuthEntreprise()

    const [error, setError] = useState('')

    const csrf = useCsrf()

    const validator = useValidator()

    const navigate = useNavigate()


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
        password: "",
        confirmMdp: "",
        car: "",
        immatriculation: "",
        marque: "",
        modele: "",
        place: "",
        prix: "",
    }

    const [entreprise, setEntreprise] = useState(initialState);


    useEffect(() => {
        csrf.getCsrfToken()
        validator.registerForm(formConfig)
    }, [])

    // useEffect(() => {
    //     validator.registerForm(formConfig(entreprise))
    // }, [entreprise.password])

    function handleChange(e) {
        const {name, value} = e.target
        validator.validate(name, value)
        setEntreprise({
            ...entreprise,
            [name]: value,
        })
    }

    function validateForm() {
        const excludeField = ["prix"]
        for (const [key, field] of Object.entries(entreprise)) {
            if (field === '' && !excludeField.includes(key)) {
                setError('Veuillez remplir tous les champs')
                return false
            }
            if (!validator.validate(key, field)) {
                setError(validator.errors[key])
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
            mdp: entreprise.password,
            confirmMdp: entreprise.confirmMdp,
            car: entreprise.car,
            immatriculation: entreprise.immatriculation,
            modele: entreprise.modele,
            marque: entreprise.marque,
            place: entreprise.place,
            prix: entreprise.prix,
            _csrf: csrf.token,
        }
    }

    function onSubmit(e) {
        e.preventDefault()
        const toatsId = toast.loading('Enregistrement en cour...',
            {autoClose: false,})

        const data = validateForm()
        if (typeof data !== 'boolean' && data) {
            authEntreprise.register(data)
                .then((response) => {
                    if (response.data) {
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
        } else {
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

    const {
        nom,
        prenom,
        tel,
        adresse,
        ville,
        cp,
        mail,
        password,
        confirmMdp,
        ...part2
    } = formConfig

    const part1 = {
        nom,
        prenom,
        tel,
        adresse,
        ville,
        cp,
        mail,
        password,
        confirmMdp,
    }

    part1.password.value = entreprise.password
    return (

        <>
            <Form $slider={slider}>
                {
                    Object.entries(part1).map((value, index) => {
                        return (
                            <DivInput>
                                <Input
                                    type={value[1].type}
                                    placeholder={value[1].placeholder}
                                    name={value[1].name}
                                    onChange={handleChange}
                                    value={entreprise[value[1].name]}
                                />
                                {
                                    validator.errors[value[1].name] && <Error>{validator.errors[value[1].name]}</Error>
                                }
                            </DivInput>
                        )
                    })
                }


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

            <Form $slider={!slider}>
                <DivSignin $carInfo>
                    <Button $cancel
                            type="button"
                            value="Retour"
                            onClick={toogleSlider}
                    >
                        <i className="ph-bold ph-arrow-fat-left"></i>
                    </Button>
                </DivSignin>
                {
                    Object.entries(part2).map((value, index) => {
                        return value[1].name !== 'car' ? (
                            <DivInput>
                                <Input
                                    type={value[1].type}
                                    placeholder={value[1].placeholder}
                                    name={value[1].name}
                                    onChange={handleChange}
                                    value={entreprise[value[1].name]}
                                />
                                {
                                    validator.errors[value[1].name] && <Error>{validator.errors[value[1].name]}</Error>
                                }
                            </DivInput>
                        ) : (
                            <Select
                                name={value[1].name}
                                onChange={handleChange}
                                value={entreprise[value[1].name]}
                            >
                                <option value="0">Type de véhicule</option>
                                {
                                    CarType.map((type) => {
                                        return <OptionCarType key={type.value} {...type}
                                        />
                                    })
                                }
                            </Select>
                        )
                    })
                }

                <DivSignin>
                    <Button
                        type="button"
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