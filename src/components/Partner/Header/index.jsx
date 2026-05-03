import React, {useState, useEffect} from "react";
import {
    HeaderImg,
    HeaderLogo,
    HeaderWrapper,
    StyledNav,
    StyledLink,
    ButtonLogout,
} from "../../../utils/Atoms"
import { useSelector } from "react-redux";
import Logo from "../../../assets/driver/logodriver.webp"
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import {getAuth} from "../../../utils/store/Partner/selectors/AuthSelectors";
import NotifBell from '../../Client/NotifBell'
import NotifPanel from '../../Client/NotifPanel'
import { USER_TYPES } from '../../../utils/constants/userTypes'


function Header(){

    const {isConnected,signout} = useAuthEntreprise()
    const auth = useSelector(getAuth)

    const [connected, setConnected] = useState(false)

    const [showNotifications, setShowNotifications] = useState(false);

    useEffect( () => {
        setConnected(isConnected())
    }, [auth.auth])

    return(
        <>
            <HeaderWrapper $driverHeader>
                <HeaderLogo>
                    <StyledLink>
                        <HeaderImg src={Logo} alt="Logo"/>
                    </StyledLink>
                </HeaderLogo>
                <StyledNav $navDriver>
                    {connected ? (
                        <>
                            <NotifBell dark={true} onClick={() => setShowNotifications((prev) => !prev)} userType={USER_TYPES.PARTNER}/>
                            { showNotifications &&  <NotifPanel/>}
                            <ButtonLogout $buttonRadius $logoutDisappear onClick={signout}>
                                Déconnexion
                            </ButtonLogout>
                        </>
                    ) : (
                        <>
                            <StyledLink to="/partner/login" $headerDriver>
                                <i className="ph-bold ph-user"></i>
                                Connexion
                            </StyledLink>
                        </>
                    )}
                </StyledNav>
            </HeaderWrapper>
        </>
    )
}
export default Header