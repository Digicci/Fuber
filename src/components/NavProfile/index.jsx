import React, {useState} from "react";
import { StyledLink } from "../../utils/Atoms";
import { useTranslation } from "react-i18next";
import {
    ContainerNav,
    ButtonResponsive,
    Nav
} from "./atoms"


function NavProfile({activePage})
{
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});

    return(
        <>
            <ContainerNav>
                <ButtonResponsive onClick={toggleMenu}>{!isOpen ? 'Menu' : 'Fermer'}</ButtonResponsive>
                <Nav $visible={isOpen && true}>
                    <StyledLink to="/order" $linkProfile >
                        {t('global.race')}
                    </StyledLink>
                    <StyledLink to="/myraces" $linkProfile $linkProfileSelected={activePage === 'myraces' && true} >
                        {t('global.my races')}
                    </StyledLink>
                    <StyledLink to="/wallet" $linkProfile $linkProfileSelected={activePage === 'wallet' && true}>
                        {t('global.wallet')}
                    </StyledLink>
                    <StyledLink to="/profile" $linkProfile $linkProfileSelected={activePage === 'profile' && true} >
                        {t('global.settings')}
                    </StyledLink>
                </Nav>
            </ContainerNav>
        </>
    )

}

export default NavProfile