import React, {useState} from "react";
import {
    Avatar,
    AvatarIconWrapper,
    AvatarWrapper,
    ContainerInfo,
    InputUpdate,
    Label,
    Number,
    ProfileLogout,
    TitlePage
} from "../../../utils/Atoms";
import avatar from '../../../assets/profile.webp';
import {useAuth} from "../../../utils/hook/Client/useAuth";
import {useCsrf} from "../../../utils/hook/useCsrf";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import {
    DivUpdate,
    UserName,
    ValideModif,
    ButtonUpdate,
    Email
} from "./atoms"

function Profil()
{
    const {user, signout, setUser, updateUser} = useAuth()
    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});

    const [update, setUpdate] = useState({
        nom:false,
        num:false,
        mail:false
    })

    const [userCopy, setUserCopy] = useState({...user})

    const csrf = useCsrf()
    const toggleUpdate = (e) => {
        const field = e.target.attributes.datafield.value
        let state =  {...update}
        state[field] = !state[field] 
        setUpdate(state)
        const userState = {...userCopy}
        if(field === 'nom'){
            userState.prenom = user.prenom
        }
        userState[field] = user[field]
        setUserCopy(userState)
    }

    const handleChange = (e) => {
        const field = e.target.name
        let state = {...userCopy}
        state[field] = e.target.value
        setUserCopy(state)
    }
    const updateProfile = () => {
        updateUser({...userCopy, _csrf: csrf.token}).then((res) => {
            setUser(res.data.user)
            localStorage.setItem('token', res.data.token)
            setUpdate({
                nom:false,
                num:false,
                mail:false
            })
            toast.success(t('global.update success'), {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                icon: '👌',
            })
            csrf.getCsrfToken()
        }).catch((err) => {
            toast.error(t('global.update error'), {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                icon: '🤔'
            })
            csrf.getCsrfToken()
        })

        
    }

    return(
        <>
            <ContainerInfo>
                <TitlePage>
                    {t('global.settings')}
                </TitlePage>
                <AvatarWrapper $profile>
                    <AvatarIconWrapper $avatarProfile>
                    <Avatar src={avatar} alt="avatar" />
                    </AvatarIconWrapper>
                    <DivUpdate>
                        {
                            update.nom ? (
                                <>
                                    <InputUpdate
                                        $updateUser
                                        type='text'
                                        placeholder={user.nom}
                                        name='nom'
                                        value={userCopy.nom}
                                        onChange={handleChange}
                                    />
                                    <InputUpdate
                                        $updateUser
                                        type='text'
                                        placeholder={user.prenom}
                                        name='prenom'
                                        value={userCopy.prenom}
                                        onChange={handleChange}
                                    />
                                    <ButtonUpdate>
                                        <i className="ph-x" dataField='nom' onClick={toggleUpdate}></i>
                                    </ButtonUpdate>
                                </>
                            ) : (
                                <>
                                    <UserName>
                                        {user?.nom} {user?.prenom}
                                    </UserName>
                                    <ButtonUpdate>
                                        <i className="ph-pencil" dataField='nom' onClick={toggleUpdate}></i>
                                    </ButtonUpdate>
                                </>
                            )
                        }

                    </DivUpdate>

                </AvatarWrapper>
                <DivUpdate>
                    {
                        update.num ? (
                            <>
                                <InputUpdate
                                    $updateUser
                                    type='tel'
                                    placeholder={user.num}
                                    name='num'
                                    value={userCopy.num}
                                    onChange={handleChange}
                                />
                                <ButtonUpdate>
                                    <i className="ph-x" dataField='num' onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>

                        ) : (
                            <>
                                <Number>
                                    {user?.num}
                                </Number>
                                <ButtonUpdate>
                                    <i className="ph-pencil" dataField='num' onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>

                        )
                    }

                </DivUpdate>

                <Label>
                    {t('profile.email')}
                </Label>
                <DivUpdate>
                    {
                        update.mail ? (
                            <>
                                <InputUpdate
                                    $updateUser
                                    type='email'
                                    placeholder={user.mail}
                                    name='mail'
                                    value={userCopy.mail}
                                    onChange={handleChange}
                                />
                                <ButtonUpdate>
                                    <i className="ph-x" dataField='mail' onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>

                        ) : (
                            <>
                                <Email>
                                    {user?.mail}
                                </Email>
                                <ButtonUpdate>
                                    <i className="ph-pencil" dataField='mail' onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>

                        )
                    }

                </DivUpdate>

                <ProfileLogout onClick={signout}>
                    {t('global.logout')}
                </ProfileLogout>
                {
                    Object.values(update).includes(true) && <ValideModif onClick={updateProfile}>Validé</ValideModif>
                }
            </ContainerInfo>
        </>
    )

}

export default Profil