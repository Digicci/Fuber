import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";
import { getAuth } from "../../../utils/store/Partner/selectors/AuthSelectors";
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


function LogIn(){

    const auth = useSelector(getAuth)
    const navigate = useNavigate()
    const location = useLocation()
    const {from} = location.state || {from: {pathname: "/partner/account/home"}}

    useEffect(() => {
        if(auth.auth){
            navigate(from, {replace: true})
        }
    }, [auth.auth])
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
                    <Close to="/">
                        <i className="ph-bold ph-x"></i>
                    </Close>
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