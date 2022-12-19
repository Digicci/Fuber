import React, {useState} from "react";
import styled from "styled-components";
// import colors from "../../colors";
import { StyledContainerLogin, StyledForm, StyledContainerInput, StyledInput, StyledObliger, StyledAccountSign, StyledLink } from "../../utils/Atoms";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledError = styled.span`
    color: red;
    text-align: center;
`

function Signup() {

    const [error, setError] = useState('') 

    const [user, setUser] = useState({
        nom: '',
        prenom:'',
        tel:'',
        email:'',
        mdp:'',
        confirmMdp:'',
    })


    function handleChange(e,field){
        const state = {...user}
        state[field] = e.target.value
        setUser(state)
    }

    function verif(){
        if(user.mdp !== user.confirmMdp){
            setError('Les mots de passe ne sont pas identique')
            return false
        } else {
            setError('')
            return true
        }
    }

    function validateForm(){
        for(const [key,field] of Object.entries(user)){
            if(field === ''){
                setError('Merci de compléter tout les champs obligatoire')
                return false
            }
        }
        if(!verif()){
            return false
        }
        return {
            nom: user.nom,
            prenom: user.prenom,
            tel: user.tel,
            mdp: user.mdp,
            email: user.email
        }
        
    }

    function onSubmit(e){
        e.preventDefault()
        const data = validateForm()
        if(data){
            toast.promise(
                axios.post('http://localhost:8000/api/user/signup', data).then((reponse) =>{

                if(reponse.data){
                    setUser({
                        nom:'',
                        prenom:'',
                        tel:'',
                        email:'',
                        mdp:'',
                        confirmMdp:'',
                    })
                }
            }),{
                pending: 'envoie en cour',
                success: 'compte crée',
                error: {
                    render({data}){
                        return data.message
                    }
                }
            }
            )
        }
    }


    return(
        <>
            <StyledContainerLogin>
                <StyledContainerLogin $entete>
                    <h2>Inscription</h2>
                    <p>Entrez vos details pour s'incrire.</p>
                </StyledContainerLogin>
                <StyledForm onSubmit={(e) => {onSubmit(e)}}>
                    <StyledContainerInput>
                        <StyledInput
                        type="text"
                        placeholder="Nom *"
                        onChange={(e) =>{handleChange(e,'nom')}}
                        value={user.nom}
                        required>
                        </StyledInput>
                        <StyledInput
                        type="text"
                        placeholder="Prénom *"
                        onChange={(e) =>{handleChange(e,'prenom')}}
                        value={user.prenom}
                        required>
                        </StyledInput>
                        <StyledInput
                        type="tel"
                        placeholder="Numéro téléphone *"
                        onChange={(e) =>{handleChange(e,'tel')}}
                        value={user.tel}
                        required>
                        </StyledInput>
                        <StyledInput type="email"
                        placeholder="E-mail *"
                        onChange={(e) =>{handleChange(e,'email')}}
                        value={user.email}
                        required
                        ></StyledInput>
                        <StyledInput
                        type="password"
                        placeholder="Mot de passe *"
                        onChange={(e) =>{handleChange(e,'mdp')}}
                        value={user.mdp}
                        required></StyledInput>
                        <StyledInput type="password"
                        placeholder="Confirmer mot de passe *"
                        onChange={(e) =>{
                            handleChange(e,'confirmMdp')
                        }}
                        onKeyUp={verif}
                        value={user.confirmMdp}
                        required></StyledInput>
                        <StyledError>{error}</StyledError>
                        <StyledInput $submit type="submit" value="S'inscrire"></StyledInput>
                    </StyledContainerInput>
                </StyledForm>
                <StyledObliger>
                    * Champs obligatoire
                </StyledObliger>
                <StyledAccountSign>
                    <StyledLink to="/login" $loginSignup>
                        Dèja inscrit ? Se connecter
                    </StyledLink>
                </StyledAccountSign>
            </StyledContainerLogin>
            <ToastContainer/>
        </>
    )
}

export default Signup