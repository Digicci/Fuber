import React, {useState, useEffect} from 'react';
import {
    ContainerInfo,
    InputUpdate,
    Label,
    Number,
    ProfileLogout,
    TitlePage,
    Avatar,
    AvatarIconWrapper,
    AvatarWrapper,
    Email,
    UserName,
    DivUpdate,
    ValideModif,
    ButtonUpdate,
    Connexion
} from "./atoms";
import avatar from '../../../assets/profile.webp';
import {useAuthEntreprise} from '../../../utils/hook/Partner/useAuthEntreprise';
import {useCsrf} from '../../../utils/hook/useCsrf';
import {toast} from 'react-toastify';

function Profil() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const {entreprise, signout, setEntreprise, updateEntreprise} = useAuthEntreprise()
    const [update, setUpdate] = useState({
        nom:false,
        num:false,
        mail:false
    })

    const [entrepriseCopy, setEntrepriseCopy] = useState({...entreprise})

    const csrf = useCsrf()

    useEffect(() => {
        csrf.getCsrfToken()
    }, [])

    const toggleUpdate = (e) => {
        const field = e.target.attributes.datafield.value
        let state =  {...update}
        state[field] = !state[field]
        setUpdate(state)
        const entrepriseState = {...entrepriseCopy}
        if(field === 'nom'){
            entrepriseState.nom = entreprise.nom
        }
        entrepriseState[field] = entreprise[field]
        setEntrepriseCopy(entrepriseState)
    }

    const handleChange = (e) => {
        const field = e.target.name
        let state = {...entrepriseCopy}
        state[field] = e.target.value
        setEntrepriseCopy(state)
    }

    const updateProfile = () => {
        updateEntreprise({...entrepriseCopy, _csrf: csrf.token}).then((res) => {
            setEntreprise({
                ...entreprise,
                nom: res.data.nom,
                prenom: res.data.prenom,
                num: res.data.num
            })
            setUpdate({
                nom:false,
                num:false,
                mail:false
            })
            toast.success('Votre profil a bien été mis à jour',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                icon: '👌',
            })
            csrf.getCsrfToken()
        }).catch((err) => {
            toast.error('Une erreur est survenue',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                icon: '❌',
            })
            csrf.getCsrfToken()
        })

    }
    return (
        <>
            <ContainerInfo>
                <TitlePage>Profil</TitlePage>
                <Connexion>
                    <label>
                        <input type="checkbox" onClick={toggleMenu} />
                        <span></span>
                    </label>
                    {
                        isOpen ?
                          <p className="txton">
                              En ligne
                          </p>
                    :
                        <p className="txtoff">
                            Hors ligne
                        </p>
                    }
                </Connexion>
                <AvatarWrapper>
                    <AvatarIconWrapper>
                        <Avatar src={avatar} alt="avatar" />
                    </AvatarIconWrapper>
                    <DivUpdate>
                        {
                            update.nom ? (
                                <>
                                    <InputUpdate
                                        $updateEntreprise
                                        type="text"
                                        placeholder={entreprise.nom}
                                        name="nom"
                                        value={entrepriseCopy.nom}
                                        onChange={handleChange}
                                    />
                                    <InputUpdate
                                        $updateEntreprise
                                        type="text"
                                        placeholder={entreprise.prenom}
                                        name="prenom"
                                        value={entrepriseCopy.prenom}
                                        onChange={handleChange}
                                    />
                                    <ButtonUpdate>
                                        <i className="ph-bold ph-x" datafield="nom" onClick={toggleUpdate}></i>
                                    </ButtonUpdate>
                                </>
                            ) : (
                                <>
                                    <UserName>
                                        {entreprise.nom} {entreprise.prenom}
                                    </UserName>
                                    <ButtonUpdate>
                                        <i className="ph-bold ph-pencil" datafield="nom" onClick={toggleUpdate}></i>
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
                                    $updateEntreprise
                                    type="tel"
                                    placeholder={entreprise.num}
                                    name="num"
                                    value={entrepriseCopy.num}
                                    onChange={handleChange}
                                />
                                <ButtonUpdate>
                                    <i className="ph-bold ph-x" datafield="num" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        ) : (
                            <>
                                <Number>
                                    {entreprise.num}
                                </Number>
                                <ButtonUpdate>
                                    <i className="ph-bold ph-phone" datafield="num" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        )
                    }
                </DivUpdate>

                <Label>
                    Email
                </Label>
                <DivUpdate>
                    {
                        update.mail ? (
                            <>
                                <InputUpdate
                                    $updateEntreprise
                                    type="email"
                                    placeholder={entreprise.mail}
                                    name="mail"
                                    value={entrepriseCopy.mail}
                                    onChange={handleChange}
                                />
                                <ButtonUpdate>
                                    <i className="ph-bold ph-x" datafield="mail" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        ) : (
                            <>
                                <Email>
                                    {entreprise.mail}
                                </Email>
                                <ButtonUpdate>
                                    <i className="ph-bold ph-mail" datafield="mail" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        )
                    }
                </DivUpdate>
                <ProfileLogout onClick={signout}>
                    Déconnexion
                </ProfileLogout>
                {
                    Object.values(update).includes(true) && <ValideModif onClick={updateProfile}>Valider les modifications</ValideModif>
                }
            </ContainerInfo>
        </>
    );
}

export default Profil;