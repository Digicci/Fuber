import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import { 
    StyledLink,
    ButtonLogout 
} from "../../utils/Atoms";
import Logo from '../../assets/logo.webp';
import { useAuth } from "../../utils/hook/useAuth";
import { useTranslation } from 'react-i18next';


const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    background: ${colors.primary};
    box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
    z-index: 10;
    height: 70px;
    padding: 0 83px;
    @media (max-width: 992px){
        justify-content: space-between;
        padding: 0 50px;
    }
    @media (max-width: 375px){
        padding: 0 5px;
    }
`
const HeaderLogo = styled.div`
    width: 30%;
    overflow: hidden;
    @media (max-width:992px){
        width: 100%;
    }
`
const HeaderImg = styled.img`
    width: 120px;
`
const StyledNav = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5rem;
    @media (max-width : 992px){
        width : 40%;
    }
`
const StyledNavGroup = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7rem;
    @media (max-width: 992px){
        margin: 0;
        justify-content: center;
        width: 100%;
    }
`
function Header({toggle}) {

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});
    
    const {user, signout, isConnected} = useAuth()

    return(
        <>
            <HeaderWrapper>
                <HeaderLogo>
                    <StyledLink to="/">
                        <HeaderImg src={Logo} alt="logo"/>  
                    </StyledLink>
                </HeaderLogo>
                <StyledNav>
                    <StyledLink $underline $disappear>
                        {t('global.race')}
                    </StyledLink>
                    <StyledLink $underline $disappear>
                        {t('global.partner')}
                    </StyledLink>
                    <StyledNavGroup>
                        {isConnected() ? (
                            <>
                                <StyledLink to="/profile" $disappear>
                                    {user?.nom} {user?.prenom}
                                </StyledLink>
                                <ButtonLogout $buttonRadius $logoutDisappear onClick={signout}>
                                    {t('global.logout')}
                                </ButtonLogout>
                            </>
                        ) : (
                            <>
                                <StyledLink to="/signup" $disappear>
                                    {t('global.signup')}
                                </StyledLink>
                                <StyledLink to="/login" $isFullLink $navLink $disappear>
                                    {t('global.login')}
                                </StyledLink>
                            </>
                        )}
                        <StyledLink $phone onClick={toggle} >
                            <i className="ph-user"></i>
                        </StyledLink>
                    </StyledNavGroup>
                </StyledNav>
            </HeaderWrapper>
        </>
    )
}

export default Header