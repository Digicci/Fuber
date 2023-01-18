import React, {useState} from "react";
import styled from "styled-components";
import { StyledLink } from "../../utils/Atoms";
import { useTranslation } from "react-i18next";
import colors from "../../colors"

const ContainerNav = styled.div`
    width: 30%;
    @media (max-width: 425px){
        width: 100%;
        position: relative;
    }
    
`
const Nav = styled.div`
    height: 100%;
    margin: 2.5rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 425px){
        height: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
        transition: all .5s ease-in;
        position: absolute;
        transform: translateY(-100%);
        backdrop-filter: blur(5px) brightness(75%);
        width:100%;
        z-index: -1;
        ${(props) =>
        props.$visible && 
            `
                transform: translateY(0);
                height:100vh;
                opacity: 1;
                z-index:5;
            `
    }
    }
    
`
const ButtonResponsive = styled.button`
    display: none;
    border: 1px solid ${colors.secondary};
    color: ${colors.primary};
    padding: 10px 15px;
    width: 100%;
    background-color: ${colors.secondary};
    font-size: 1rem;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-weight: 700;
    @media (max-width: 425px){
        display: block;
    }
`

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