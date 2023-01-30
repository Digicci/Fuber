import React from "react";
import { 
    Container,
    ContainerForm,
    ContainerSignup,
    Select,
    WhyUs,
    ContainerInfo
} from "./atoms";
import {
    StyledInput,
    ContainerStep,
    CcmImg,
    DivImg,
    Step,
    DivText,
    Ptext
} from "../../../utils/Atoms";
import et1 from "../../../assets/driver/et1.webp"
import et2 from "../../../assets/driver/et2.webp"
import et3 from "../../../assets/driver/et3.webp"

function SignIn(){

    return(
        <>
            <Container>
                <ContainerSignup $cover>
                    <ContainerForm>
                        <h2>Lancez-vous !</h2>
                        <StyledInput 
                        name="nomEntreprise"
                        type="text"
                        placeholder="Nom entreprise*"
                        />
                        <StyledInput 
                        name="numSiret"
                        type="text"
                        placeholder="N°Siret/Siren*"
                        />
                        <StyledInput 
                        name="adresse"
                        type="text"
                        placeholder="Adresse*"
                        />
                        <StyledInput 
                        name="ville"
                        type="text"
                        placeholder="Ville*"
                        />
                        <StyledInput 
                        name="cp"
                        type="text"
                        placeholder="Code postal*"
                        />
                        <StyledInput 
                        name="complement"
                        type="text"
                        placeholder="Etage/Suite(facultatif)"
                        />
                        <StyledInput 
                        name="nom"
                        type="text"
                        placeholder="Nom*"
                        />
                        <StyledInput 
                        name="prenom"
                        type="text"
                        placeholder="Prénom"
                        />
                        <StyledInput 
                        name="tel"
                        type="text"
                        placeholder="Numéro de téléphone*"
                        />
                        <StyledInput 
                        name="mail"
                        type="email"
                        placeholder="Adresse e-mail*"
                        />
                        <StyledInput 
                        name="mdp"
                        type="password"
                        placeholder="Mot de passe*"
                        />
                        <StyledInput 
                        name="confirmMdp"
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        />
                        <Select>
                            <option value=''>- Nombre de salarié -</option>
                            <option value='1'>1</option>
                        </Select>
                    </ContainerForm>
                </ContainerSignup>
                <ContainerInfo>
                    <WhyUs>
                        <h4>Pourquoi nous ?</h4>
                    </WhyUs>
                    <ContainerStep>
                        <Step>
                            <DivImg>
                                <CcmImg src={et1} alt="Première étape"/>
                            </DivImg>
                            <DivText>
                                <Ptext>Livrez vos commandes à votre façon</Ptext>
                                <Ptext $child2>Nos offres sont flexibles : vous pouvez ainsi les adapter à vos besoins. Rejoignez NOUS et faites livrer vos commandes par vos coursiers.</Ptext>
                            </DivText>
                            </Step>
                            <Step>
                            <DivImg>
                                <CcmImg src={et2} alt="Second étape"/>
                            </DivImg>
                            <DivText>
                                <Ptext>Augmentez votre visibilité</Ptext>
                                <Ptext $child2>Démarquez-vous grâce au marketing intégré à l'application pour atteindre davantage de clients et accroître vos ventes.</Ptext>
                            </DivText>
                            </Step>
                            <Step>
                            <DivImg>
                                <CcmImg src={et3} alt="Troisème étape"/>
                            </DivImg>
                            <DivText>
                                <Ptext>Établissez un lien avec vos clients</Ptext>
                                <Ptext $child2>Conservez vos clients sur le long terme en utilisant des données exploitables, en répondant aux commentaires ou en offrant un programme de fidélité.</Ptext>
                            </DivText>
                        </Step>
                    </ContainerStep>
                </ContainerInfo>
            </Container>
        </>
    )
}
export default SignIn