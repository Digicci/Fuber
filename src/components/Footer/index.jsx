import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import { StyledLink } from "../../utils/Atoms";
import Logo from '../../assets/logofooter.webp'
import { useTranslation } from 'react-i18next';

const FooterWrapper = styled.footer`
    position: sticky;
    top: 100vh;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:flex-end;
    background: ${colors.secondary};
    padding: 2rem 3rem ;
    margin: 3rem 0 0 0 !important;
    @media (max-width: 992px){
        flex-direction: column;
        align-items: center;
    }
`
const ContainerLogo = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
`
const Img = styled.img`
    width: 100px;
`
const ContainerIcon = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: ${colors.primary};
`
const ContainerLink = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 .5rem 15rem;
    @media (max-width:1024px){
        margin: 0 0 .5rem 0
    }
`
const ContainerWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width:1024px){
        flex-direction:column;
        align-items:flex-start;
    }
`
const Copyright = styled.div`
    color: ${colors.primary};
    font-size: .96rem;
    display: flex;
    margin: 0 0 .5rem 15rem;
    @media (max-width:1024px){
        margin: 0 0 .5rem 0
    }
`


function Footer() {

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});

    return (
        <>
        <FooterWrapper>
            <ContainerLogo>   
                <StyledLink to="/">
                    <Img src={Logo} alt='Logo'/>
                </StyledLink>
                <ContainerIcon>
                    <StyledLink $icon>
                        <i className="ph-instagram-logo"></i>
                    </StyledLink>
                    <StyledLink $icon>
                        <i className="ph-facebook-logo"></i>
                    </StyledLink>
                </ContainerIcon>
            </ContainerLogo>
            <ContainerWrapper>
                <ContainerLink>
                    <StyledLink $footerLink>
                        {t('global.race')}
                    </StyledLink>
                    <StyledLink $footerLink>
                        {t('global.partner')}
                    </StyledLink>
                    <StyledLink $footerLink>
                        {t('global.contact')}
                    </StyledLink>
                </ContainerLink>
                <ContainerLink>
                    <StyledLink $footerLink>
                        {t('global.about')}
                    </StyledLink>
                    <StyledLink $footerLink>
                        {t('global.terms of use')}
                    </StyledLink>
                    <StyledLink $footerLink>
                        {t('global.f.a.q')}
                    </StyledLink>
                </ContainerLink>
            </ContainerWrapper>
            <Copyright>
                <p>© 2022 Entreprise.</p>
            </Copyright>
        </FooterWrapper>
        </>
    )
}

export default Footer