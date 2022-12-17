import React from "react";
import { StyledContainerLogin, StyledForm, StyledContainerInput, StyledInput, StyledObliger, StyledAccountSign, StyledLink } from "../../utils/Atoms";

function Login(){

    return(
        <>
            <StyledContainerLogin>
                <StyledContainerLogin $entete>
                    <h2>Connexion</h2>
                    <p>Entrez vos détails pour se connecter</p>
                </StyledContainerLogin>
                <StyledForm>
                    <StyledContainerInput>
                        <StyledInput type="text" placeholder="E-mail ou numéro de téléphone" required></StyledInput>
                        <StyledInput type="password" placeholder="Mot de passe" required>
                        </StyledInput>
                        <StyledInput $submit $connecter type="submit" value="Se connecter"></StyledInput>
                    </StyledContainerInput>
                </StyledForm>
                <StyledObliger>
                    Mot de passe oublié ?
                </StyledObliger>
                <StyledAccountSign>
                    <StyledLink to="/signup" $loginSignup>
                        Pas de compte ? S'inscrire.
                    </StyledLink>
                </StyledAccountSign>
            </StyledContainerLogin>
        </>
    )
}

export default Login