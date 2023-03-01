import React,{useState} from "react";
import {
    Container,
    Nav,
    NavLink,
    Connexion,
    Logout,
    Responsive,
} from "./atoms"




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
                <Responsive onClick={toggleMenu}>
                    {!isOpen ? 'Menu' : 'Fermer'}
                </Responsive>
                <Nav $visible={isOpen && true}>
                    <NavLink to="/partner/account/home" $linkAccountSelected = {activePage === 'home' && true} >
                        <i class="ph-house"></i>
                        Home
                    </NavLink>
                    <NavLink to="/partner/account/race"  $linkAccountSelected={activePage === 'race' && true} >
                        <i class="ph-calendar-check"></i>
                        Course
                    </NavLink>
                    <NavLink to="/partner/account/finance" $linkAccountSelected={activePage === 'finance' && true}>
                        <i class="ph-chart-line-up"></i>
                        Finance
                    </NavLink>
                    <NavLink to="/partner/account/team" $linkAccountSelected={activePage === 'team' && true} >
                        <i class="ph-users-three"></i>
                        Team
                    </NavLink>
                    <NavLink to="/partner/account/profile" $linkAccountSelected={activePage === 'profile' && true} >
                        <i class="ph-user-circle-gear"></i>
                        Profile
                    </NavLink>
                    <NavLink to="/partner/account/help" $linkAccountSelected={activePage === 'help' && true} >
                        <i class="ph-info"></i>
                        Aide
                    </NavLink>
                    <NavLink to="/partner/account/setting" $linkAccountSelected={activePage === 'setting' && true} >
                        <i class="ph-gear"></i>
                        Setting
                    </NavLink>
                    <Logout $logoutDisappear>
                        <i class="ph-sign-out"></i>
                        Déconnexion
                    </Logout>
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