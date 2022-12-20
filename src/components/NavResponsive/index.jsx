import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import logo from '../../assets/logo.webp';
import { StyledLink } from "../../utils/Atoms";
import { useAuth } from "../../utils/hook/useAuth";


const StyledNavResponsive = styled.div`
    position : fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(38,38,38,0.8);
    transform: translateX(4000px);
    z-index: 200;
    ${(props) => 
        props.isOpen &&
        `transform : translateX(0);
        `
    }
`
const StyledClose = styled.div`
    text-align: end;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-right: 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
`
const StyledContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background : ${colors.primary};
    justify-content: flex-start;
    @media (max-width: 425px){
        width:80%;
    }
    @media (min-width: 1440px){
        width: 22%;
    }
`

const StyledConnectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: solid ${colors.secondary} 1px;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
`
const LogoNav = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 2rem;
`
const ImgNav = styled.img`
    width: 150px;
`

function NavResponsive({isOpen, toggle}){
    
    const {user, signout, isConnected} = useAuth()

    return (
        <>
            <StyledNavResponsive isOpen={isOpen} onClick={toggle}>
                <StyledContainer>
                    <StyledClose>
                        <i class="ph-x closemenu"></i>
                    </StyledClose>
                    {isConnected() ? (
                            <>
                                <StyledConnectionWrap>
                                    <StyledLink to="/user" $disappearance>
                                        {user?.nom}, {user?.prenom}
                                    </StyledLink>
                                    <StyledLink to="/login" $isFullLink $disappearance $xxl onClick={signout}>
                                        Déconnexion
                                    </StyledLink>
                                    <StyledLink $navVertical>
                                        Mes course
                                    </StyledLink>
                                    <StyledLink $navVertical>
                                        Wallet
                                    </StyledLink>
                                    <StyledLink $navVertical>
                                        Parametres du profil
                                    </StyledLink>
                                </StyledConnectionWrap>
                                <StyledLink to='' $navVertical>
                                    Commandez une course
                                </StyledLink>
                                <StyledLink $navVertical>
                                    Devenir partenaire
                                </StyledLink>
                            </>
                        ) : (
                            <>
                               <StyledConnectionWrap>
                                <StyledLink to="/signup" $isShadowLink $disappearance $xxl>
                                    Inscription
                                    </StyledLink>
                                    <StyledLink to="/login" $isFullLink $disappearance $xxl>
                                    Connexion
                                </StyledLink>
                               </StyledConnectionWrap>
                               <StyledLink to='/login' $navVertical>
                                    Commandez une course
                                </StyledLink>
                                <StyledLink $navVertical>
                                    Devenir partenaire
                                </StyledLink>
                                <StyledLink $navVertical>
                                    Aide
                                </StyledLink>
                            </>
                    )}
                    <LogoNav>
                        <StyledLink to='/'>
                            <ImgNav src={logo} alt="logo" />
                        </StyledLink>
                    </LogoNav>
                </StyledContainer>
            </StyledNavResponsive>
        </>
    )
}

export default NavResponsive