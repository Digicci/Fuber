import React, {useState, useEffect} from "react";
import styled from "styled-components";
// import colors from "../../colors";
import {useNavigate} from "react-router-dom";
import {
    StyledContainerLogin,
    StyledForm,
    StyledContainerInput,
    StyledInput,
    StyledObliger,
    StyledAccountSign,
    StyledLink
} from "../../../utils/Atoms";
import {useAuth} from "../../../utils/hook/useAuth";
import {useCsrf} from "../../../utils/hook/useCsrf";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const StyledError = styled.span`
  color: red;
  text-align: center;
`

function Signup() {

    const {t, i18n} = useTranslation('translation', {keyPrefix: 'signup'});

    const csrf = useCsrf()

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const toastTimer = 2000

    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        tel: '',
        email: '',
        mdp: '',
        confirmMdp: '',
    })
    const auth = useAuth()

    useEffect(() => {
        csrf.getCsrfToken()
    }, [])


    function handleChange(e, field) {
        const state = {...user}
        state[field] = e.target.value
        setUser(state)
    }

    function verif() {
        if (user.mdp !== user.confirmMdp) {
            setError(t('error confirmMdp'))
            return false
        } else {
            setError('')
            return true
        }
    }

    function validateForm() {
        for (const [key, field] of Object.entries(user)) {
            if (field === '') {
                setError(t('error validate'))
                return false
            }
        }
        if (!verif()) {
            return false
        }
        return {
            nom: user.nom,
            prenom: user.prenom,
            tel: user.tel,
            mdp: user.mdp,
            email: user.email,
            _csrf: csrf.token
        }

    }

    function onSubmit(e) {
        const toastId = toast.loading(t('loading submit'), {autoClose: false})
        e.preventDefault()
        const data = validateForm()
        if (data) {
            auth.signup(data).then((reponse) => {
                if (reponse.data) {
                    setUser({
                        nom: '',
                        prenom: '',
                        tel: '',
                        email: '',
                        mdp: '',
                        confirmMdp: '',
                    })
                    setError('')
                    toast.update(toastId, {
                        render: t('update success'),
                        type: toast.TYPE.SUCCESS,
                        autoClose: toastTimer,
                        isLoading: false,
                        icon: '👌'
                    })
                    setTimeout(() => {
                        navigate('/login', {replace: true})
                    }, toastTimer);
                }
            }).catch((error) => {
                toast.update(toastId, {
                    render: error.response.data,
                    type: "error",
                    autoClose: 5000,
                    isLoading: false,
                    icon: '🤔',
                    className: 'rotateY animated'
                })
                setUser({
                    nom: '',
                    prenom: '',
                    tel: '',
                    email: '',
                    mdp: '',
                    confirmMdp: '',
                })
            })
        }
    }


    return (
        <>
            <StyledContainerLogin>
                <StyledContainerLogin $entete>
                    <h2>{t('signup')}</h2>
                    <p>{t('signup description')}</p>
                </StyledContainerLogin>
                <StyledForm onSubmit={(e) => {
                    onSubmit(e)
                }}>
                    <StyledContainerInput>
                        <StyledInput
                            type="text"
                            placeholder={t('last name')}
                            onChange={(e) => {
                                handleChange(e, 'nom')
                            }}
                            value={user.nom}
                            required
                        />

                        <StyledInput
                            type="text"
                            placeholder={t('first name')}
                            onChange={(e) => {
                                handleChange(e, 'prenom')
                            }}
                            value={user.prenom}
                            required
                        />
                        <StyledInput
                            type="tel"
                            placeholder={t('phone number')}
                            onChange={(e) => {
                                handleChange(e, 'tel')
                            }}
                            value={user.tel}
                            required
                        />
                        <StyledInput
                            type="email"
                            placeholder={t('email')}
                            onChange={(e) => {
                                handleChange(e, 'email')
                            }}
                            value={user.email}
                            required
                        />
                        <StyledInput
                            type="password"
                            placeholder={t('password')}
                            onChange={(e) => {
                                handleChange(e, 'mdp')
                            }}
                            value={user.mdp}
                            required
                        />
                        <StyledInput
                            type="password"
                            placeholder={t('confirmMdp')}
                            onChange={(e) => {
                                handleChange(e, 'confirmMdp')
                            }}
                            onKeyUp={verif}
                            value={user.confirmMdp}
                            required
                        />
                        <StyledError>{error}</StyledError>
                        <StyledInput $submit type="submit" value={t('signup')}/>
                    </StyledContainerInput>
                </StyledForm>
                <StyledObliger>
                    {t('obligate')}
                </StyledObliger>
                <StyledAccountSign>
                    <StyledLink to="/login" $loginSignup>
                        {t('member')}
                    </StyledLink>
                </StyledAccountSign>
            </StyledContainerLogin>
        </>
    )
}

export default Signup