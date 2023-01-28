import React from "react";
import {
    HeaderImg,
    HeaderLogo,
    HeaderWrapper,
    StyledNav,
    StyledLink
} from "../../../utils/Atoms"
import Logo from "../../../assets/driver/logodriver.webp"

function HeaderDriver(){
    return(
        <>
            <HeaderWrapper $driverHeader>
                <HeaderLogo>
                    <StyledLink>
                        <HeaderImg src={Logo} alt="Logo"/>
                    </StyledLink>
                </HeaderLogo>
                <StyledNav $navDriver>
                    <StyledLink $headerDriver>
                        <i className="ph-user"></i>
                        Connexion
                    </StyledLink>
                </StyledNav>
            </HeaderWrapper>
        </>
    )
}
export default HeaderDriver