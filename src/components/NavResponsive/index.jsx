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
     StyledClose
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

    const {t, i18n} = useTranslation('translation', {keyPrefix: 'header'});
    
    const {user, signout, isConnected} = useAuth()

    return (
        <>
            <StyledModal isOpen={isOpen} onClick={toggle}>
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

                                    <StyledLink to="/login" $isFullLink $navLink $xxl onClick={signout}>
                                        {t('logout')}
                                    </StyledLink>
                                    <StyledLink to="myraces" $navVertical>
                                        {t('my races')}
                                    </StyledLink>
                                    <StyledLink to="/wallet" $navVertical>
                                        {t('wallet')}
                                    </StyledLink>
                                    <StyledLink to='/profile' $navVertical>
                                        {t('settings')}
                                    </StyledLink>
                                </StyledConnectionWrap>
                                <StyledLink to='' $navVertical>
                                    {t('race')}
                                </StyledLink>
                                <StyledLink $navVertical>
                                    {t('partner')}
                                </StyledLink>
                            </>
                        ) : (
                            <>
                               <StyledConnectionWrap>
                                <StyledLink to="/signup" $isShadowLink $navLink $xxl>
                                    {t('signup')}
                                    </StyledLink>
                                    <StyledLink to="/login" $isFullLink $navLink $xxl>
                                    {t('login')}
                                </StyledLink>
                               </StyledConnectionWrap>
                               <StyledLink to='/login' $navVertical>
                                    {t('race')}
                                </StyledLink>
                                <StyledLink $navVertical>
                                    {t('partner')}
                                </StyledLink>
                                <StyledLink $navVertical>
                                    {t('help')}
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