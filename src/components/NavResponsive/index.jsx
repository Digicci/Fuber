import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import logo from '../../assets/logo.webp';
import {
     StyledLink,
     AvatarWrapper,
     AvatarIconWrapper,
     Avatar
} from "../../utils/Atoms";
import { useAuth } from "../../utils/hook/useAuth";
import avatar from '../../assets/profile.webp';
import { useTranslation } from 'react-i18next';


const StyledNavResponsive = styled.div`
    position : fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(38,38,38,0.8);
    transform: translateX(4000px);
    z-index: 200;
    ${(props) => 
        props.isOpen &&
        `transform : translateX(0);
        `
    }
`
const StyledClose = styled.div`
    text-align: end;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-right: 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
`
const StyledContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background : ${colors.primary};
    justify-content: flex-start;
    @media (max-width: 425px){
        width:80%;
    }
    @media (min-width: 1440px){
        width: 22%;
    }
`

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
            <StyledNavResponsive isOpen={isOpen} onClick={toggle}>
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
                                    <StyledLink $navVertical>
                                        {t('my races')}
                                    </StyledLink>
                                    <StyledLink $navVertical>
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
            </StyledNavResponsive>
        </>
    )
}

export default NavResponsive