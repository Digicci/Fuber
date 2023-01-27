import React from "react";
import { 
    Container,
    ContainerForm,
    ContainerSignup
} from "./atoms";
import {
    StyledInput,
    SelectForm
} from "../../../utils/Atoms";

function Partner(){

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
                        <SelectForm>
                            <option value=''>- Nombre de salarié -</option>
                            <option value='1'>1</option>
                        </SelectForm>
                    </ContainerForm>
                </ContainerSignup>
            </Container>
        </>
    )
}
export default Partner