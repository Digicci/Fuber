import React, {useState, useEffect} from "react";
import logo from '../../../assets/logo.webp';
import {
     StyledLink,
     AvatarWrapper,
     AvatarIconWrapper,
     Avatar,
     StyledModal,
     StyledContainer,
     StyledClose,
     ButtonLogout
} from "../../../utils/Atoms";
import { useAuth } from "../../../utils/hook/Client/useAuth";
import avatar from '../../../assets/profile.webp';
import { useTranslation } from 'react-i18next';
import {
    StyledConnectionWrap,
    LogoNav,
    ImgNav
} from "./atoms"







function NavResponsive({isOpen, toggle}){

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});
    
    const {user, signout, isConnected} = useAuth()

    const [connected, setConnected] = useState(false)

    useEffect( () => {
        setConnected(isConnected())
    }, [user])

    return (
        <>
            <StyledModal $isOpen={isOpen} onClick={toggle}>
                <StyledContainer>
                    <StyledClose>
                        <i className="ph-bold ph-x closemenu"></i>
                    </StyledClose>
                    {connected ? (
                            <>
                                <StyledConnectionWrap>
                                    <AvatarWrapper>
                                        <AvatarIconWrapper>
                                            <Avatar src={avatar} alt="avatar" />
                                        </AvatarIconWrapper>
                                        <StyledLink to="/user" $xxl>
                                            {user?.nom}, {user?.prenom}
                                        </StyledLink>
                                    </AvatarWrapper>

                                    <ButtonLogout onClick={signout}>
                                        {t('global.logout')}
                                    </ButtonLogout>
                                    <StyledLink to="/account/myraces" $navVertical>
                                        {t('global.my races')}
                                    </StyledLink>
                                    <StyledLink to="/account/wallet" $navVertical>
                                        {t('global.wallet')}
                                    </StyledLink>
                                    <StyledLink to='/account/profile' $navVertical>
                                        {t('global.settings')}
                                    </StyledLink>
                                </StyledConnectionWrap>
                                <StyledLink to='/order' $navVertical>
                                    {t('global.race')}
                                </StyledLink>
                                <StyledLink to ="/partner/signin" $navVertical>
                                    {t('global.partner')}
                                </StyledLink>
                            </>
                        ) : (
                            <>
                               <StyledConnectionWrap>
                                <StyledLink to="/signup" $isShadowLink $navLink $xxl>
                                    {t('global.signup')}
                                    </StyledLink>
                                    <StyledLink to="/login" $isFullLink $navLink $xxl>
                                    {t('global.login')}
                                </StyledLink>
                               </StyledConnectionWrap>
                               <StyledLink to='/order' $navVertical>
                                    {t('global.race')}
                                </StyledLink>
                                <StyledLink to ="/partner/signin" $navVertical>
                                    {t('global.partner')}
                                </StyledLink>
                                <StyledLink $navVertical>
                                    {t('global.help')}
                                </StyledLink>
                            </>
                    )}
                    <LogoNav>
                        <StyledLink to='/'>
                            <ImgNav src={logo} alt="logo" />
                        </StyledLink>
                    </LogoNav>
                </StyledContainer>
            </StyledModal>
        </>
    )
}

export default NavResponsive