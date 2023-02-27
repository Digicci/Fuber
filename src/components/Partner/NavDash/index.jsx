import React,{useState} from "react";
import { StyledLink } from "../../../utils/Atoms";
import {
    Container,
    ButtonResponsive,
    Nav,
    NavLink,
    Connexion,
} from "./atoms"
import {ButtonLogout} from "../../../utils/Atoms";


function NavDash({activePage}) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const [isOnline, setIsOnline] = useState(false)
    const toggleOnline = () => {
        setIsOnline(!isOnline)
    }

    return (
        <>
            <Container>
                <ButtonResponsive onClick={toggleMenu}>{!isOpen ? 'Menu' : 'Fermer'}</ButtonResponsive>
                <Nav $visible={isOpen && true}>
                    <NavLink to="/partner/account/home" $linkAccountSelected = {activePage === 'home' && true} >
                        Home
                    </NavLink>
                    <NavLink to="/partner/account/race"  $linkAccountSelected={activePage === 'race' && true} >
                        Course
                    </NavLink>
                    <NavLink to="/partner/account/finance" $linkAccountSelected={activePage === 'finance' && true}>
                        Finance
                    </NavLink>
                    <NavLink to="/partner/account/team" $linkAccountSelected={activePage === 'team' && true} >
                        Team
                    </NavLink>
                    <NavLink to="/partner/account/profile" $linkAccountSelected={activePage === 'profile' && true} >
                        Profile
                    </NavLink>
                    <NavLink to="/partner/account/help" $linkAccountSelected={activePage === 'help' && true} >
                        Aide
                    </NavLink>
                    <NavLink to="/partner/account/setting" $linkAccountSelected={activePage === 'setting' && true} >
                        Setting
                    </NavLink>
                    <ButtonLogout $buttonRadius $logoutDisappear>
                        Déconnexion
                    </ButtonLogout>
                    <Connexion>
                        <label>
                            <input type="checkbox" onClick={toggleOnline} />
                            <span></span>
                        </label>
                        {
                            isOnline ? 
                                <p className="txton">
                                    En ligne
                                </p>
                            :
                                <p className="txtoff">
                                Hors ligne
                                </p>
                        }
                    </Connexion>
                </Nav>
            </Container>
        </>
    );
}

export default NavDash;