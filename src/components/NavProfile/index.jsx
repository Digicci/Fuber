import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../utils/Atoms";

const ContainerNav = styled.div`
    width: 30%;
    
`
const Nav = styled.div`
    height: 100%;
    margin: 2.5rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: column;
`

function NavProfile()
{

    return(
        <>
            <ContainerNav>
                <Nav>
                    <StyledLink $linkProfile>
                        Commandez une course
                    </StyledLink>
                    <StyledLink to="/myraces" $linkProfile>
                        Mes courses
                    </StyledLink>
                    <StyledLink to="/wallet" $linkProfile>
                        Wallet
                    </StyledLink>
                    <StyledLink to="/profile" $linkProfile>
                        Paramètre du profil
                    </StyledLink>
                </Nav>
            </ContainerNav>
        </>
    )

}

export default NavProfile