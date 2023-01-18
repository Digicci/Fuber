import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import logo from '../../assets/logo.webp';
import {
     StyledLink,
     AvatarWrapper,
     AvatarIconWrapper,
     Avatar,
     StyledModal,
     StyledContainer,
     StyledClose,
     ButtonLogout
} from "../../utils/Atoms";
import { useAuth } from "../../utils/hook/useAuth";
import avatar from '../../assets/profile.webp';
import { useTranslation } from 'react-i18next';




const StyledConnectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-bottom: solid ${colors.secondary} 1px;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px){
        gap: 0;
    }
`
const LogoNav = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 2rem;
`
const ImgNav = styled.img`
    width: 150px;
`



function NavResponsive({isOpen, toggle}){

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});
    
    const {user, signout, isConnected} = useAuth()

    return (
        <>
            <StyledModal $isOpen={isOpen} onClick={toggle}>
                <StyledContainer>
                    <StyledClose>
                        <i className="ph-x closemenu"></i>
                    </StyledClose>
                    {isConnected() ? (
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
                                    <StyledLink to="myraces" $navVertical>
                                        {t('global.my races')}
                                    </StyledLink>
                                    <StyledLink to="/wallet" $navVertical>
                                        {t('global.wallet')}
                                    </StyledLink>
                                    <StyledLink to='/profile' $navVertical>
                                        {t('global.settings')}
                                    </StyledLink>
                                </StyledConnectionWrap>
                                <StyledLink to='' $navVertical>
                                    {t('global.race')}
                                </StyledLink>
                                <StyledLink $navVertical>
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
                                <StyledLink $navVertical>
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