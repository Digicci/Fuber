import React from "react";
import styled from "styled-components";
import colors from "../../colors";
// import logo from '../../assets/logo.webp';
import { StyledLink } from "../../utils/Atoms";


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
    background : ${colors.primary};
    @media (max-width: 425px){
        width:80%;
    }
`

function NavResponsive({isOpen, toggle}){
    

    return (
        <>
            <StyledNavResponsive isOpen={isOpen} onClick={toggle}>
                <StyledContainer>
                    <StyledClose>
                        <i class="ph-x closemenu"></i>
                    </StyledClose>
                </StyledContainer>
            </StyledNavResponsive>
        </>
    )
}

export default NavResponsive