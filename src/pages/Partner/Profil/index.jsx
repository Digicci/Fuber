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
    DivOnline,
    EntrepriseName,
    EntrepriseSiret
} from './atoms'
import avatar from '../../../assets/profile.webp';
import {useAuthEntreprise} from '../../../utils/hook/Partner/useAuthEntreprise';
import {useCsrf} from '../../../utils/hook/useCsrf';
import {toast} from 'react-toastify';
import Online from '../../../components/Partner/Online';

function Profil() {



    const {entreprise, signout, setEntreprise, updateEntreprise,} = useAuthEntreprise()
    const [update, setUpdate] = useState({
        nom:false,
        num:false,
        mail:false,
        nom_commercial:false,
        siret:false
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
                <DivOnline>
                    <Online />
                </DivOnline>
                <AvatarWrapper>
                    <AvatarIconWrapper>
                        <Avatar src={avatar} alt="avatar" />
                    </AvatarIconWrapper>
                    <Label>
                        Nom et prénom
                    </Label>
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
                <Label>
                    Numéro de téléphone professionnel
                </Label>
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
                                    <i className="ph-bold ph-pencil" datafield="num" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        )
                    }
                </DivUpdate>

                <Label>
                    Email professionnel
                </Label>
                <Email>
                    {entreprise.mail}
                </Email>

                <Label>
                    Nom entreprise
                </Label>
                <EntrepriseName>
                    {entreprise.nom_commercial}
                </EntrepriseName>
                <Label>
                    Siret/Siren
                </Label>
                <EntrepriseSiret>
                    {entreprise.siret}
                </EntrepriseSiret>
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