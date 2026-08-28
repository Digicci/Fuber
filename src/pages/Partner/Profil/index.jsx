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
    EntrepriseSiret,
    Button,
    DivText,

} from './atoms';
import {Row} from '../../../utils/Atoms';
import avatar from '../../../assets/profile.webp';
import {useAuthEntreprise} from '../../../utils/hook/Partner/useAuthEntreprise';
import {useCsrf} from '../../../utils/hook/useCsrf';
import {toast} from 'react-toastify';
import Online from '../../../components/Partner/Online';
import {useSelector, useDispatch} from "react-redux";
import {getAuthUser} from "../../../utils/store/Partner/selectors/AuthSelectors";
import {setAuth} from "../../../utils/store/Partner/reducers/AuthReducer";
import AddCar from '../../../components/Partner/AddCar'

function Profil() {


    const dispatch = useDispatch()
    const entreprise = useSelector(getAuthUser)

    const { signout, updateEntreprise} = useAuthEntreprise()
    const [update, setUpdate] = useState({
        nom:false,
        num:false,
        mail:false,
        nom_commercial:false,
        siret:false,
        prix: false,
    })

    const [entrepriseCopy, setEntrepriseCopy] = useState({...entreprise})

    const csrf = useCsrf()

    useEffect(() => {
        csrf.getCsrfToken()
    }, [])

    const toggleUpdate = (e) => {
        // L'attribut est declare `data-field` en JSX : `dataField` en camelCase
        // n'etait pas rendu dans le DOM, et la lecture echouait donc ici.
        const target = e.target.closest('[data-field]')
        const field = target && target.dataset.field
        if (!field) return
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
        field === "prix" ? state[field] = e.target.value.replace(",", ".") : state[field] = e.target.value
        setEntrepriseCopy(state)
    }

    const updateProfile = () => {
        updateEntreprise({...entrepriseCopy}).then((res) => {
            dispatch(setAuth({
                ...entreprise,
                nom: res.data.nom,
                prenom: res.data.prenom,
                num: res.data.num,
                prix: res.data.prix
            }))
            setUpdate({
                nom:false,
                num:false,
                mail:false,
                prix: false,
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

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div style={{display: "flex", width: "100%", marginBottom: "1rem"}}>
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
                                        <i className="ph-bold ph-x" data-field="nom" onClick={toggleUpdate}></i>
                                    </ButtonUpdate>
                                </>
                            ) : (
                                <>
                                    <UserName>
                                        {entreprise.nom} {entreprise.prenom}
                                    </UserName>
                                    <ButtonUpdate>
                                        <i className="ph-bold ph-pencil" data-field="nom" onClick={toggleUpdate}></i>
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
                                    <i className="ph-bold ph-x" data-field="num" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        ) : (
                            <>
                                <Number>
                                    {entreprise.num}
                                </Number>
                                <ButtonUpdate>
                                    <i className="ph-bold ph-pencil" data-field="num" onClick={toggleUpdate}></i>
                                </ButtonUpdate>
                            </>
                        )
                    }
                </DivUpdate>
                <Label>
                    Prix au kilomètre
                </Label>
                <DivUpdate>
                    {
                        update.prix ? (
                          <>

                              <InputUpdate
                                $updateEntreprise
                                type="text"
                                placeholder={entreprise.prix}
                                name="prix"
                                value={entrepriseCopy.prix}
                                onChange={handleChange}
                              />
                              <ButtonUpdate>
                                  <i className="ph-bold ph-x" data-field="prix" onClick={toggleUpdate}></i>
                              </ButtonUpdate>
                          </>
                        ) : (
                          <>
                              <Number>
                                  {entreprise.prix} €/km
                              </Number>
                              <ButtonUpdate>
                                  <i className="ph-bold ph-pencil" data-field="prix" onClick={toggleUpdate}></i>
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
            <ContainerInfo $vehicule>
                <TitlePage>Véhicule</TitlePage>
                {
                    entreprise?.vehicule == null ? (
                      <Row>
                          <AddCar toggle={toggleIsOpen} isOpen={isOpen}/>
                          <Button onClick={toggleIsOpen}><i className="ph-bold ph-plus"></i> Ajouter un véhicule</Button>
                      </Row>
                    ) : (
                      <Row $rowVehicule>
                          <DivText>
                              <ul>
                                  <li>
                                      <span>
                                          Immatriculation
                                      </span>
                                  </li>
                                  <li>
                                      <span>
                                          Marque
                                      </span>
                                  </li>
                                  <li>
                                      <span>
                                          Modèle
                                      </span>
                                  </li>
                                  <li>
                                      <span>
                                          Places
                                      </span>
                                  </li>
                                  {
                                    entreprise.entrepriseId == null && <li>
                                      <span>
                                        Supprimer
                                      </span>
                                    </li>
                                  }
                              </ul>
                              <ul>
                                  <li>
                                      <span>
                                          {entreprise.vehicule?.immatriculation}
                                      </span>
                                  </li>
                                  <li>
                                      <span>
                                          {entreprise.vehicule?.marque}
                                      </span>
                                  </li>
                                  <li>
                                      <span>
                                          {entreprise.vehicule?.model}
                                      </span>
                                  </li>
                                  <li>
                                      <span>
                                          {entreprise.vehicule?.places}
                                      </span>
                                  </li>
                                  {
                                    entreprise.entrepriseId == null && <li>
                                      <span>
                                          <i className="ph-bold ph-x"></i>
                                      </span>
                                    </li>
                                  }
                              </ul>
                          </DivText>
                      </Row>
                    )
                }
            </ContainerInfo>
        </div>
    );
}

export default Profil;