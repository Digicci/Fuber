import React, {useEffect, useState} from "react";
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
import { useAuth } from "../../../utils/hook/Client/useAuth";
import { useTranslation } from 'react-i18next';

function Header({toggle}) {

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});
    
    const {user, signout, isConnected} = useAuth()

    const [connected, setConnected] = useState(false)

    useEffect( () => {
        setConnected(isConnected())
    }, [user])

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
                    <StyledLink to ="/partner/signin" $underline $disappear>
                        {t('global.partner')}
                    </StyledLink>
                    <StyledNavGroup>
                        {connected ? (
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
                            <i className="ph-bold ph-user"></i>
                        </StyledLink>
                    </StyledNavGroup>
                </StyledNav>
            </HeaderWrapper>
        </>
    )
}

export default Header