import React from "react";
import { StyledLink } from "../../utils/Atoms";
import Logo from '../../assets/logofooter.webp'
import { useTranslation } from 'react-i18next';
import {
    FooterWrapper,
    ContainerLogo,
    ContainerIcon,
    ContainerLink,
    Img,
    ContainerWrapper,
    Copyright
} from "./atoms"



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