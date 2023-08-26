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
    Select,
    Error,
} from "./atoms";
import CarType from "../../../utils/Data/Partner/CarType";
import OptionCarType from "../OptionCarType";
import { formConfig } from "./config";



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
        password: "",
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
        validator.registerForm(formConfig(entreprise))
    }, [])

    useEffect(() => {
        validator.registerForm(formConfig(entreprise))
    }, [entreprise.password])

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
            if(!validator.validate(key, field)){
                console.log(key)
                console.log(validator.errors[key])
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

    const  InputWrap =({inputInfo, handleChange}) =>{

        if(inputInfo?.name === 'car'){
            return(
              <Select name={inputInfo?.name} onChange={(e) => {
                  handleChange(e, inputInfo?.name)}}>
                  <option value="0">Type de véhicule</option>
                  {
                      data.map((type) => {
                          return <OptionCarType key={type.value} {...type}
                          />
                      })
                  }
              </Select>
            )
        }

        return (
          <>
              <DivInput>
                  <Input
                    type={inputInfo?.type}
                    placeholder={inputInfo?.placeholder}
                    name={inputInfo?.name}
                    onChange={(e) => {
                        handleChange(e, inputInfo?.name)
                    }}
                  />
                  {
                      validator.errors[inputInfo?.name] && <Error>{validator.errors[inputInfo?.name]}</Error>
                  }
              </DivInput>

          </>
        )
    }

    const  {
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
    } = formConfig(entreprise)

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
    return(

        <>
            <Form $slider={slider} >
                {
                    Object.keys(part1).map((key) => {
                        return <InputWrap key={`${key}-1`} inputInfo={part1[key]} handleChange={handleChange} />
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
                    Object.keys(part2).map((key) => {
                        return <InputWrap key={`${key}-2`} inputInfo={part2[key]} handleChange={handleChange} />
                    })
                }

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