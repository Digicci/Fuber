import React, {useState, useEffect} from 'react'
import {
  Form,
  DivInput,
  Input,
  Button,
  Select,
  Error,
} from './atoms'
import { formConfig } from './config'
import CarType from '../../../utils/Data/Partner/CarType'
import OptionCarType from '../OptionCarType'
import { useAuthEntreprise} from '../../../utils/hook/Partner/useAuthEntreprise'
import { useValidator} from '../../../utils/hook/useValidator'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function FormAddCar() {
  const authEntreprise = useAuthEntreprise()
  const [error, setError] = useState('')
  const validator = useValidator()
  const navigate = useNavigate()
  const toastTimer = 2000
  const initialState = {
    immatriculation: '',
    marque: '',
    modele: '',
    places: '',
    car: '',
  }

  const [entreprise, setEntreprise] = useState(initialState)
  useEffect(() => {
    validator.registerForm(formConfig)
  }, [])

  function handleChange(e)  {
    const { name, value } = e.target
    setEntreprise({ ...entreprise, [name]: value })
  }

  function validateForm(){
    for(const [key,field] of Object.entries(entreprise)){
      if(field === '' && key !== ''){
        setError('Veuillez remplir tous les champs')
        return false
      }
    }

    setError('')
    return {
      immatriculation: entreprise.immatriculation,
      marque: entreprise.marque,
      modele: entreprise.modele,
      places: entreprise.places,
      car: entreprise.car,
    }
  }
  function handleSubmit(e){
      e.preventDefault()
      const toastId = toast.loading('Chargement...',{autoClose: false,})
      const data = validateForm()
      if (typeof data !== 'boolean' && data) {
        authEntreprise.registerVehicule(data)
          .then((response) => {
            if (response.data) {
              setError('')
              toast.update(toastId, {
                render: 'Le compte chauffeur a bien été créé',
                type: toast.TYPE.SUCCESS,
                autoClose: toastTimer,
                isLoading: false,
                icon: '👌',
              })
              setTimeout(() => {
                navigate('/partner/account/profile', {replace: true})
              }, toastTimer)
            }
          })
          .catch((error) => {
            toast.update(toastId, {
              render: error.response.data,
              type: toast.TYPE.ERROR,
              autoClose: toastTimer,
              isLoading: false,
              icon: '🤔',
            })
            setEntreprise(initialState)
          })
      } else {
        toast.update(toastId, {
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
  return (
    <>
      <Form>
        <DivInput>
          <Input
            type="text"
            placeholder="Immatriculation"
            name="immatriculation"
            onChange={handleChange}
            value={entreprise.immatriculation}
          />
          {
            validator.errors.immatriculation && <Error>{validator.errors.immatriculation}</Error>
          }
        </DivInput>
        <Select
          name="car"
          onChange={handleChange}
          value={entreprise.car}
        >
          <option value="0">Type de véhicule</option>
          {
            CarType.map((type) => {
              return <OptionCarType key={type.value} {...type} />
            })
          }

        </Select>
        <DivInput>
          <Input
            type="text"
            placeholder="Marque"
            name="marque"
            onChange={handleChange}
            value={entreprise.marque}
          />
          {
            validator.errors.marque && <Error>{validator.errors.marque}</Error>
          }
        </DivInput>
        <DivInput>
          <Input
            type="text"
            placeholder="Modèle"
            name="modele"
            onChange={handleChange}
            value={entreprise.modele}
          />
          {
            validator.errors.modele && <Error>{validator.errors.modele}</Error>
          }
        </DivInput>
        <DivInput>
          <Input
            type="text"
            placeholder="Nombre de places"
            name="places"
            onChange={handleChange}
            value={entreprise.places}
          />
          {
            validator.errors.places && <Error>{validator.errors.places}</Error>
          }
        </DivInput>
        <Button
          type="submit"
          value="Envoyer"
          onClick={handleSubmit}
        >
          Validé
        </Button>
      </Form>
    </>
  )
}

export default FormAddCar