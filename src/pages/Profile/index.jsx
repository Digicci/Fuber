import React from "react";
import styled from "styled-components";
import NavProfile from "../../components/NavProfile";
import {
    StyledLink,
    AvatarWrapper,
    AvatarIconWrapper,
    Avatar
} from "../../utils/Atoms";
import avatar from '../../assets/profile.webp';
import { useAuth } from "../../utils/hook/useAuth";

const ContainerProfile = styled.div`
    width: 100%;
    display: flex;
`
const ContainerInfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 ;
`
const TitlePage = styled.h2`
    font-size: 1.65rem;
    font-weight:600;
    display: flex;
`
const Number = styled.p`
    font-size: 1.15rem;
    margin: 1rem 0 1rem;
`
const Label = styled.p`
    margin-top: 1rem;
    font-size: 1.05rem;
    font-weight: 600;
`
const Email = styled.p`
    font-size: 1rem;
    margin: .5rem 0 1rem 0 ;
`


function Profil()
{
    const {user, signout} = useAuth()

    return(
        <>
            <ContainerProfile>
                <NavProfile/>
                <ContainerInfo>
                    <TitlePage>
                        Paramètres du profil
                    </TitlePage>
                    <AvatarWrapper $profile>
                        <AvatarIconWrapper $avatarProfile>
                        <Avatar src={avatar} alt="avatar" />
                        </AvatarIconWrapper>
                        <StyledLink to="/user" $xxl $userProfil>
                            {user?.nom} {user?.prenom}
                        </StyledLink>
                    </AvatarWrapper>
                    <Number>
                        {user?.num}
                    </Number>
                    <Label>
                        Adresse e-mail
                    </Label>
                    <Email>
                        {user?.mail}
                    </Email>
                    <StyledLink to="/login"  $navLink $logoutProfil onClick={signout}>
                        Déconnexion
                    </StyledLink>
                </ContainerInfo>
            </ContainerProfile>
        </>
    )

}

export default Profil