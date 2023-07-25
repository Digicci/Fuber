import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    StyledContainerLogin,
    StyledForm,
    StyledContainerInput,
    StyledInput,
    StyledObliger,
    StyledAccountSign,
    StyledLink
} from "../../../utils/Atoms";
import {toast} from "react-toastify";
import { useAuth } from "../../../utils/hook/Client/useAuth";
import { useCsrf } from "../../../utils/hook/useCsrf";
import { useTranslation } from 'react-i18next';
import { useCard } from "../../../utils/hook/Client/useCard";

function Login({isPopUp = false, closePopUp = () => {}}){

    const {t, i18n} = useTranslation('translation', {keyPrefix: 'login'});
    

    const auth = useAuth()
    const navigate = useNavigate()
    const card = useCard()
    const [user, setUser] = useState({
        credential:'',
        mdp:'',
    })
    const location = useLocation()
    const {from} = location.state || {from: {pathname: "/"}}
    const idToast = 1

    const toastTimer = 2000

    const csrf = useCsrf()
    //get csrf token
    useEffect(() => {
        csrf.getCsrfToken()
    }, [])

    useEffect(() => {
        if (auth.isConnected()) {
            navigate(from, { replace: true })
        }
    }, [auth.user])

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
            toast(t('toast info error login'), {
                type: 'error',
                autoClose: 2000,
                position: 'top-right',
                icon: '🤔'
            })
        } else {
            //if present, send request to server, before make a toast
            toast.loading(t('toast loader login'), {
                toastId: idToast
            })
            auth.signin(user.credential, user.mdp, csrf.token).then(res => {
                if (res.data) {
                    if (isPopUp) {
                        toast.update(idToast, {
                            type: 'success',
                            autoClose: toastTimer,
                            render: "Vous êtes connecté",
                            isLoading: false,
                            icon: '👌',
                            className: 'rotateY',
                            closeOnClick: true
                        })
                        localStorage.setItem('user_token', res.data.token)
                        auth.setUser(res.data.user)
                        closePopUp()
                        card.getCards().then(res => {

                        })
                    } else {
                        toast.update(idToast, {
                            type: 'success',
                            autoClose: toastTimer,
                            render: t('toast update login'),
                            isLoading: false,
                            icon: '👌',
                            className: 'rotateY',
                            closeOnClick: true
                        })
                        setTimeout(() => {
                            const returnFunc = new Promise((resolve, reject) => {
                                resolve(navigate('/', { replace: true }))
                            })
                            returnFunc.then(() => {
                                localStorage.setItem('user_token', res.data.token)
                                auth.setUser(res.data.user)
                                card.getCards().then(res => {

                                })
                            })
                        }, toastTimer);
                    }
                }
            }).catch(err => {
                if (err.response.data.includes('CSRF')) {
                    toast.update(idToast, {
                        render: t('toats update error login'),
                        type: 'error',
                        autoClose: 5000,
                        isLoading: false,
                        icon: '🤔',
                        className: 'rotateY animated'
                    })
                } else {
                    toast.update(idToast, {
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
            <StyledContainerLogin>
                <StyledContainerLogin $entete>
                    <h2>{t('login')}</h2>
                    <p>{t('login description')}</p>
                </StyledContainerLogin>
                <StyledForm onSubmit={(e) => { handleSubmit(e) }}>
                    <StyledContainerInput>
                        <StyledInput
                            type="text"
                            onChange={ (e) => handleChange(e, 'credential') }
                            value={user.credential}
                            placeholder={t('email')}
                            required
                        ></StyledInput>
                        <StyledInput
                            type="password"
                            onChange={ (e) => handleChange(e, 'mdp') }
                            value={user.mdp}
                            placeholder={t('password')}
                            required
                        >
                        </StyledInput>
                        <StyledInput $submit $connecter type="submit" value={t('login')}></StyledInput> 
                    </StyledContainerInput>
                </StyledForm>
                <StyledObliger>
                    {t('forgot password')}
                </StyledObliger>
                <StyledAccountSign>
                    <StyledLink to="/signup" $loginSignup>
                        {t('not account')}
                    </StyledLink>
                </StyledAccountSign>
            </StyledContainerLogin>
        </>
    )
}

export default Login