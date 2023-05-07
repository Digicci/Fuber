import React, {useState, useEffect} from "react";
import {
    HeaderImg,
    HeaderLogo,
    HeaderWrapper,
    StyledNav,
    StyledLink,
    ButtonLogout,
} from "../../../utils/Atoms"
import Logo from "../../../assets/driver/logodriver.webp"
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";


function Header(){

    const {entreprise, isConnected,signout} = useAuthEntreprise()

    const [connected, setConnected] = useState(false)

    useEffect( () => {
        setConnected(isConnected())
    }, [entreprise])

    return(
        <>
            <HeaderWrapper $driverHeader>
                <HeaderLogo>
                    <StyledLink>
                        <HeaderImg src={Logo} alt="Logo"/>
                    </StyledLink>
                </HeaderLogo>
                <StyledNav $navDriver>
                    {connected ? (
                        <>
                            <ButtonLogout $buttonRadius $logoutDisappear onClick={signout}>
                                Déconnexion
                            </ButtonLogout>
                        </>
                    ) : (
                        <>
                            <StyledLink to="/partner/login" $headerDriver>
                                <i className="ph-bold ph-user"></i>
                                Connexion
                            </StyledLink>
                        </>
                    )}
                </StyledNav>
            </HeaderWrapper>
        </>
    )
}
export default Header