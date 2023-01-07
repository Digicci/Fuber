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
import { useTranslation } from 'react-i18next';

function Login(){

    const {t, i18n} = useTranslation('translation', {keyPrefix: 'login'});
    

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
            toast(t('toast info error login'), {
                type: 'error',
                autoClose: 5000,
                position: 'top-right',
                icon: '🤔'
            })
        } else {
            //if present, send request to server, before make a toast
            const toastId = toast.loading(t('toast loader login'), { autoClose: false, position: 'top-right' })
            auth.signin(user.credential, user.mdp, csrf.token).then(res => {
                if (res.data) {
                    toast.update(toastId, {
                        render: t('toast update login'),
                        type: 'success',
                        autoClose: toastTimer,
                        isLoading: false,
                        icon: '👌',
                        className: 'rotateY animated'
                    })
                    setTimeout(() => {
                        const returnFunc = new Promise((resolve, reject) => {
                            resolve(navigate('/', { replace: true }))
                        })
                        returnFunc.then(() => {
                            localStorage.setItem('token', res.data.token)
                            auth.setUser(res.data.user)
                        })
                    }, toastTimer);
                }
            }).catch(err => {
                if (err.response.data.includes('CSRF')) {
                    toast.update(toastId, {
                        render: t('toats update error login'),
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