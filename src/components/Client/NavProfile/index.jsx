import React, {useState} from "react";
import {
    StyledLink,
    ButtonResponsive
} from "../../../utils/Atoms";
import { useTranslation } from "react-i18next";
import {
    ContainerNav,
    Nav
} from "./atoms";


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
                    <StyledLink to="/account/myraces" $linkProfile $linkProfileSelected={activePage === 'myraces' && true} >
                        {t('global.my races')}
                    </StyledLink>
                    <StyledLink to="/account/wallet" $linkProfile $linkProfileSelected={activePage === 'wallet' && true}>
                        {t('global.wallet')}
                    </StyledLink>
                    <StyledLink to="/account/profile" $linkProfile $linkProfileSelected={activePage === 'profile' && true} >
                        {t('global.settings')}
                    </StyledLink>
                </Nav>
            </ContainerNav>
        </>
    )

}

export default NavProfile