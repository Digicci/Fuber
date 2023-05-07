import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Close,
    Container,
    ContainerForm,
    ContainerLogin,
    Title
} from "./atoms";
import darkLogo from "../../../assets/driver/logodriverreverse.webp"
import logo from "../../../assets/driver/logodriver.webp"
import FormLogin from "../../../components/Partner/FormLogin";
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";


function LogIn(){

    const auth = useAuthEntreprise()
    const navigate = useNavigate()
    const location = useLocation()
    const {from} = location.state || {from: {pathname: "/partner/account/home"}}

    useEffect(() => {
        if(auth.isConnected()){
            navigate(from, {replace: true})
        }
    }, [auth.entreprise])
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
                    <Close className="ph-bold ph-x"/>
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