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
import { formConfig } from "./config";

function InputWrap({inputInfo, handleChange}) {

    return (
        <Input
            type={inputInfo.type}
            placeholder={inputInfo.placeholder}
            name={inputInfo.name}
            onChange={(e) => {
                handleChange(e, inputInfo.name)
            }}
        />
    )
}

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
                    <InputWrap inputInfo={formConfig.nom} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.prenom} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.tel} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.adresse} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.ville} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.cp} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.mail} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.mdp} handleChange={handleChange} />
                </DivInput>
                <DivInput>
                    <InputWrap inputInfo={formConfig.confirmMdp} handleChange={handleChange} />
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
                        <i className="ph-bold ph-arrow-fat-left"></i>
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