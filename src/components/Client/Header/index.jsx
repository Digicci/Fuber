import React from "react";
import { 
    StyledLink,
    ButtonLogout,
    HeaderImg,
    HeaderLogo,
    HeaderWrapper,
    StyledNav,
    StyledNavGroup, 
} from "../../../utils/Atoms";
import Logo from '../../../assets/logo.webp';
import { useAuth } from "../../../utils/hook/useAuth";
import { useTranslation } from 'react-i18next';

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
                    <StyledLink to="/order" $underline $disappear>
                        {t('global.race')}
                    </StyledLink>
                    <StyledLink $underline $disappear>
                        {t('global.partner')}
                    </StyledLink>
                    <StyledNavGroup>
                        {isConnected() ? (
                            <>
                                <StyledLink to="/account/profile" $disappear>
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