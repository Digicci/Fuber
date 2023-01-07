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
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    Label,
    Number
} from "../../utils/Atoms"

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