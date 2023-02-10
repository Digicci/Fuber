import React from "react";
import { StyledLink } from "../../../utils/Atoms";
import { Button, DivForgot, DivInput, DivSignin, Form, Input, Label } from "./atoms";

function FormLogin(){
    return (
        <>
            <Form>
                <DivInput>
                    <Input />
                    <Label>
                        <i className="ph-envelope"></i>
                    </Label>
                </DivInput>
                <DivInput>
                    <Input />
                    <Label>
                        <i className="ph-lock-key"></i>
                    </Label>
                </DivInput>
                <DivForgot>
                    <StyledLink $forgotEntreprise>
                        Mot de passe oublié ?
                    </StyledLink>
                </DivForgot>
                <Button
                    type="submit"
                >
                    Connexion
                </Button>
                <DivSignin>
                    <StyledLink $signinEntreprise>
                        Pas encore inscrit ? S'incrire
                    </StyledLink>
                </DivSignin>
            </Form>
        </>
    )
}
export default FormLogin