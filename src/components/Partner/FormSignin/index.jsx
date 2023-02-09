import React from "react";
import { StyledInput } from "../../../utils/Atoms";
import { ContainerForm,
    Select
} from "./atoms";

function FormSignin(){

    return(
        <>
            <ContainerForm>
                <h2>Lancez-vous !</h2>
                <StyledInput $signinDriver
                name="nomEntreprise"
                type="text"
                placeholder="Nom entreprise*"
                />
                <StyledInput $signinDriver
                name="numSiret"
                type="text"
                placeholder="N°Siret/Siren*"
                />
                <StyledInput $signinDriver
                name="adresse"
                type="text"
                placeholder="Adresse*"
                />
                <StyledInput $signinDriver
                name="ville"
                type="text"
                placeholder="Ville*"
                />
                <StyledInput $signinDriver
                name="cp"
                type="text"
                placeholder="Code postal*"
                />
                <StyledInput $signinDriver
                name="complement"
                type="text"
                placeholder="Etage/Suite(facultatif)"
                />
                <StyledInput $signinDriver
                name="nom"
                type="text"
                placeholder="Nom*"
                />
                <StyledInput $signinDriver
                name="prenom"
                type="text"
                placeholder="Prénom"
                />
                <StyledInput $signinDriver
                name="tel"
                type="text"
                placeholder="Numéro de téléphone*"
                />
                <StyledInput $signinDriver
                name="mail"
                type="email"
                placeholder="Adresse e-mail*"
                />
                <StyledInput $signinDriver
                name="mdp"
                type="password"
                placeholder="Mot de passe*"
                />
                <StyledInput $signinDriver
                name="confirmMdp"
                type="password"
                placeholder="Confirmer le mot de passe"
                />
                <Select>
                    <option value=''>- Nombre de salarié -</option>
                    <option value='1'>1</option>
                </Select>
                <StyledInput $submit $connecter type="submit" value="Envoyer"/>
            </ContainerForm>
        </>
    )
}

export default FormSignin