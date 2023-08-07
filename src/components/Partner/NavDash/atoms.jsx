import styled from "styled-components";
import colors from "../../../colors"
import {
    StyledLink,
    ButtonResponsive,
} from "../../../utils/Atoms";

export const Container = styled.div`
    display: flex;
    width: 20%;
    height: 100dvh;
  grid-area: navDash;
    background-color: ${colors.secondary};
    @media (max-width: 768px){
        width: 100%;
        height: 40px;
        position: absolute;
        top: 60px;
        left: 0;
        flex-direction: column;
    }
    
`

export const Nav = styled.div`
    width: 100%;
    margin: 2.5rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px){
        height: 0vh;
        opacity: 0;
        margin: 0;
        padding: 0;
        transition: all .5s ease-in;
        position: absolute;
        top: 40px;
        left: 0;
        transform: translateY(-100%);
        backdrop-filter: blur(5px) brightness(75%);
        width:100%;
        z-index: -1;
        ${(props) =>
        props.$visible && 
            `
                transform: translateY(0);
                height:calc(100vh - 100px);
                opacity: 1;
                z-index:5;
            `
        }
    }
    
`


export const NavLink = styled(StyledLink)`
    font-size: 1.05rem;
    padding: .5rem 0 0 .5rem;
    height: 50px;
    color: ${colors.primary};
    display: flex;
    align-items: center;
    margin: 0;
    i{
        font-size: 1.5rem;
        margin-right: 1rem;
        color: ${colors.primary};
        align-items: center;
    }
    &:hover{
        background-color: ${colors.fourth};
        color: ${colors.secondary};
        i{
            color: ${colors.secondary};
        }
    }
    ${(props) =>
        props.$linkAccountSelected && 
            `
            background-color: ${colors.fourth};
            color: ${colors.secondary};
            i{
                color: ${colors.secondary};
            }
            `
    }
`    

export const Logout = styled.button`
    color: ${colors.primary};
    -webkit-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    padding: .5rem 0 0 .5rem;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 1.05rem;
    i{
        font-size: 1.5rem;
        margin-right: 1rem;
        color: ${colors.primary};
    }
    &:hover{
        background-color: ${colors.red};
        color: ${colors.primary};
        i{
            color: ${colors.primary};
        }
    }
`
export const Responsive = styled(ButtonResponsive)`
    display: none;
    @media (max-width:768px){
        display: block;
    }
`