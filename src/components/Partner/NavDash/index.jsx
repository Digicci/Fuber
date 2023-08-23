import React,{useState} from "react";
import {
    Container,
    Nav,
    NavLink,
    Logout,
    Responsive
} from "./atoms"
import Online from '../Online'
import { useAuthEntreprise } from '../../../utils/hook/Partner/useAuthEntreprise'





function NavDash({activePage}) {
    const { signout } = useAuthEntreprise()
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }



    const closeMenu = () => {
        setIsOpen(false)
    }
    
    return (
        <>
            <Container>
                <Responsive onClick={toggleMenu}>
                    {!isOpen ? 'Menu' : 'Fermer'}
                </Responsive>
                <Nav $visible={isOpen && true}>
                    <NavLink onClick={closeMenu} to="/partner/account/home" $linkAccountSelected = {activePage === 'home' && true} >
                        <i className="ph-bold ph-house"></i>
                        Home
                    </NavLink>
                    <NavLink onClick={closeMenu} to="/partner/account/race"  $linkAccountSelected={activePage === 'race' && true} >
                        <i className="ph-bold ph-calendar-check"></i>
                        Course
                    </NavLink>
                    <NavLink onClick={closeMenu} to="/partner/account/finance" $linkAccountSelected={activePage === 'finance' && true}>
                        <i className="ph-bold ph-chart-line-up"></i>
                        Finance
                    </NavLink>
                    <NavLink onClick={closeMenu} to="/partner/account/team" $linkAccountSelected={activePage === 'team' && true} >
                        <i className="ph-bold ph-users-three"></i>
                        Team
                    </NavLink>
                    <NavLink onClick={closeMenu} to="/partner/account/profile" $linkAccountSelected={activePage === 'profile' && true} >
                        <i className="ph-bold ph-user-circle-gear"></i>
                        Profile
                    </NavLink>
                    <NavLink onClick={closeMenu} to="/partner/account/help" $linkAccountSelected={activePage === 'help' && true} >
                        <i className="ph-bold ph-info"></i>
                        Aide
                    </NavLink>
                    <Logout onClick={signout} $logoutDisappear>
                        <i className="ph-bold ph-sign-out"></i>
                        Déconnexion
                    </Logout>
                    <Online />
                </Nav>
            </Container>
        </>
    );
}

export default NavDash;