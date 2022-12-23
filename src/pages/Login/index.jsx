import React, { useState, useEffect } from "react";
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
import { useCsrf } from "../../utils/hook/useCsrf";

function Login(){

    const auth = useAuth()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        credential:'',
        mdp:'',
    })

    const toastTimer = 2000

    const csrf = useCsrf()
    //get csrf token
    useEffect(() => {
        csrf.getCsrfToken()
    }, [])

    //handle change of input
    const handleChange = (e,field) => {
        const state = {...user}
        if (field === "credential") {
            state[field] = e.target.value.replace(/ /g,'')
        } else {
            state[field] = e.target.value
        }
        setUser(state)
    }

    //handle submit of form
    const handleSubmit = (e) => {
        e.preventDefault()
        //check if credential is present
        if(user.credential === '' || user.mdp === ''){
            //if not present, display error toast
            toast('Merci de compléter tout les champs obligatoire', {
                type: 'error',
                autoClose: 5000,
                position: 'top-right',
                icon: '🤔'
            })
        } else {
            //if present, send request to server, before make a toast
            const toastId = toast.loading('Connexion en cours...', { autoClose: false, position: 'top-right' })
            auth.signin(user.credential, user.mdp, csrf.token).then(res => {
                if (res.data) {
                    toast.update(toastId, {
                        render: `Connexion réussie, vous allez être redirigé.`,
                        type: 'success',
                        autoClose: toastTimer,
                        isLoading: false,
                        icon: '👌',
                        className: 'rotateY animated'
                    })
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    auth.setUser(res.data.user)
                    setTimeout(() => {
                        navigate('/', { replace: true })
                    }, toastTimer);
                }
            }).catch(err => {
                if (err.response.data.includes('CSRF')) {
                    toast.update(toastId, {
                        render: 'Une erreur est survenue, verifiez votre connexion internet.',
                        type: 'error',
                        autoClose: 5000,
                        isLoading: false,
                        icon: '🤔',
                        className: 'rotateY animated'
                    })
                } else {
                    toast.update(toastId, {
                        render: err.response.data,
                        type: 'error',
                        autoClose: 5000,
                        isLoading: false,
                        icon: '🤔',
                        className: 'rotateY animated'
                    })
                }
                localStorage.clear()
                csrf.getCsrfToken()
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