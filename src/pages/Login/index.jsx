import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    StyledContainerLogin,
    StyledForm,
    StyledContainerInput,
    StyledInput,
    StyledObliger,
    StyledAccountSign,
    StyledLink
} from "../../utils/Atoms";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../utils/hook/useAuth";

function Login(){

    const auth = useAuth()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        credential:'',
        mdp:'',
    })

    const handleChange = (e,field) => {
        const state = {...user}
        if (field === "credential") {
            state[field] = e.target.value.replace(/ /g,'')
        } else {
            state[field] = e.target.value
        }
        setUser(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.credential === '' || user.mdp === ''){
            toast('Merci de compléter tout les champs obligatoire', {
                type: 'error',
                autoClose: 5000,
                position: 'top-right',
                icon: '🤔'
            })
        } else {
            const toastId = toast.loading('Connexion en cours...', { autoClose: false, position: 'top-right' })
            auth.signin(user.credential, user.mdp).then(res => {
                if (res.data) {
                    console.log(res.data)
                    toast.update(toastId, {
                        render: `Connexion réussie, vous allez être redirigé.`,
                        type: 'success',
                        autoClose: 5000,
                        isLoading: false,
                        icon: '👌'
                    })
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    auth.setUser(res.data.user)
                    setTimeout(() => {
                        navigate('/', { replace: true })
                    }, 5000);
                }
            }).catch(err => {
                toast.update(toastId, {
                    render: err.response.data,
                    type: 'error',
                    autoClose: 5000,
                    isLoading: false,
                    icon: '🤔'
                })
            })
        }
    }

    return(
        <>
            <ToastContainer />
            <StyledContainerLogin>
                <StyledContainerLogin $entete>
                    <h2>Connexion</h2>
                    <p>Entrez vos détails pour se connecter</p>
                </StyledContainerLogin>
                <StyledForm onSubmit={(e) => { handleSubmit(e) }}>
                    <StyledContainerInput>
                        <StyledInput
                            type="text"
                            onChange={ (e) => handleChange(e, 'credential') }
                            value={user.credential}
                            placeholder="E-mail ou numéro de téléphone"
                            required
                        ></StyledInput>
                        <StyledInput
                            type="password"
                            onChange={ (e) => handleChange(e, 'mdp') }
                            value={user.mdp}
                            placeholder="Mot de passe"
                            required
                        >
                        </StyledInput>
                        <StyledInput $submit $connecter type="submit" value="Se connecter"></StyledInput>
                    </StyledContainerInput>
                </StyledForm>
                <StyledObliger>
                    Mot de passe oublié ?
                </StyledObliger>
                <StyledAccountSign>
                    <StyledLink to="/signup" $loginSignup>
                        Pas de compte ? S'inscrire.
                    </StyledLink>
                </StyledAccountSign>
            </StyledContainerLogin>
        </>
    )
}

export default Login