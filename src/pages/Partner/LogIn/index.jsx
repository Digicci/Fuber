import React from "react";
import {
    Close,
    Container,
    ContainerForm,
    ContainerLogin,
    Title
} from "./atoms";
import logo from "../../../assets/driver/logodriver.webp"
import darkLogo from "../../../assets/driver/logodriverreverse.webp"
import FormLogin from "../../../components/Partner/FormLogin";


function LogIn(){

    return (
        <>
            <Container>
                <ContainerLogin $cover>
                    <Title>
                        <img src={logo} alt="Logo" />
                        <p>Connectez vous à votre espace</p>
                    </Title>
                </ContainerLogin>
                <ContainerLogin $form>
                    <Close className="ph-x"/>
                    <ContainerForm>
                        <img src={darkLogo} alt="Logo" />
                        <FormLogin />
                    </ContainerForm>
                </ContainerLogin>
            </Container>
        </>
    )
}
export default LogIn 