import React, {useState, useEffect} from "react";
import { StyledLink } from "../../../utils/Atoms";
import { Button, DivForgot, DivInput, DivSignin, Form, Input, Label } from "./atoms";
import {useDispatch} from "react-redux";
import {setAuth} from "../../../utils/store/Partner/actions/AuthActions";
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { useNavigate } from "react-router-dom";
import { useCsrf } from "../../../utils/hook/useCsrf";
import { toast } from "react-toastify";

function FormLogin() {

    const authEntreprise = useAuthEntreprise()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [entreprise, setEntreprise] = useState({
        mail:'',
        mdp:'',
    })
    const idToast = 1
    const toastTimer = 2000
    const csrf = useCsrf()

    //get csrf token
    useEffect(() => {
        if (authEntreprise.isConnected()) {
            navigate('/partner/account/home', { replace: true })
        }
        csrf.getCsrfToken()
    }, [])

    //handle change of input
    const handleChange = (e,field) => {
        const state = {...entreprise}
        if (field === "mail") {
            state[field] = e.target.value.replace(/ /g,'')
        } else {
            state[field] = e.target.value
        }
        setEntreprise(state)
    }

    //handle submit of form
    const handleSubmit = (e) => {
        e.preventDefault()
        //check if credential is present
        if(entreprise.mail === '' || entreprise.mdp === ''){
            //if not present, display error toast
            toast('Merci de completer tout les champs obligatoire', {
                position: "top-right",
                autoClose: toastTimer,
                type: 'error',
                icon: '🤔'
            })
        } else {
            //if present, send request to server
            toast.loading('Connexion en cours...', {
                position: "top-right",
                autoClose: false,
                toastId: idToast
            })
            authEntreprise.signin(entreprise.mail, entreprise.mdp, csrf.token).then((res) => {
                if(res.data){
                    toast.update(idToast, {
                        render: 'Connexion réussie',
                        type: 'success',
                        autoClose: toastTimer,
                        position: 'top-right',
                        icon: '👍',
                        isLoading: false,
                        closeOnClick: true
                    })
                    localStorage.setItem('driver_token', res.data.token)
                    authEntreprise.setEntreprise(res.data.driver)
                    dispatch(setAuth(res.data.driver))
                    setTimeout(() => {
                        navigate('/partner/account/home', { replace: true })
                    }, 2000)
                }
            }).catch((err) => {
                if(err.response.data.includes('CSRF')){
                    toast.update(idToast, {
                        render: 'Erreur de connexion, veuillez réessayer',
                        type: 'error',
                        autoClose: 5000,
                        position: 'top-right',
                        icon: '🤔',
                        isLoading: false,
                        closeOnClick: true
                    })

                } else {
                    toast.update(idToast, {
                        render: err.response.data,
                        type: 'error',
                        autoClose: toastTimer,
                        position: 'top-right',
                        icon: '🤔',
                        isLoading: false,
                        className: 'rotateY animated',
                    })
                }
                localStorage.clear()
                dispatch(setAuth(null))
                csrf.getCsrfToken()
            })

        }
    }


    return (
        <>
            <Form>
                <DivInput>
                    <Input
                        type="email"
                        value={entreprise.mail}
                        onChange={(e) => {handleChange(e, 'mail')}}
                        placeholder="Email"
                        required
                    />
                    <Label>
                        <i className="ph-bold ph-envelope"></i>
                    </Label>
                </DivInput>
                <DivInput>
                    <Input
                        type="password"
                        value={entreprise.mdp}
                        onChange={(e) => {handleChange(e, 'mdp')}}
                        placeholder="Mot de passe"
                        required
                    />
                    <Label>
                        <i className="ph-bold ph-lock-key"></i>
                    </Label>
                </DivInput>
                <DivForgot>
                    <StyledLink $forgotEntreprise>
                        Mot de passe oublié ?
                    </StyledLink>
                </DivForgot>
                <Button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Connexion
                </Button>
                <DivSignin>
                    <StyledLink to="/partner/signin" $signinEntreprise>
                        Pas encore inscrit ? S'incrire
                    </StyledLink>
                </DivSignin>
            </Form>
        </>
    )
}
export default FormLogin