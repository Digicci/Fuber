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
                <Nav $visible={isOpen && true} onClick={toggleMenu}>
                    <StyledLink to="/order" $linkProfile >
                        <i className="ph ph-taxi"></i><p>{t('global.race')}</p>
                    </StyledLink>
                    <StyledLink to="/account/myraces" $linkProfile $linkProfileSelected={activePage === 'myraces' && true} >
                        <i className="ph ph-activity"></i><p>{t('global.my races')}</p>
                    </StyledLink>
                    <StyledLink to="/account/wallet" $linkProfile $linkProfileSelected={activePage === 'wallet' && true}>
                        <i className="ph ph-cardholder"></i><p>{t('global.wallet')}</p>
                    </StyledLink>
                    <StyledLink to="/account/profile" $linkProfile $linkProfileSelected={activePage === 'profile' && true} >
                        <i className=" ph ph-gear"></i> <p>{t('global.settings')}</p>
                    </StyledLink>
                </Nav>
            </ContainerNav>
        </>
    )

}

export default NavProfile