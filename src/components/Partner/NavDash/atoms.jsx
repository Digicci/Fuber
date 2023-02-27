import styled from "styled-components";
import colors from "../../../colors"
import { StyledLink } from "../../../utils/Atoms";

export const Container = styled.div`
    width: 30%;
    height: 80vh;
    background-color: ${colors.secondary};
    @media (max-width: 425px){
        width: 100%;
        position: relative;
    }
`

export const Nav = styled.div`
    height: 100%;
    margin: 2.5rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 425px){
        height: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
        transition: all .5s ease-in;
        position: absolute;
        transform: translateY(-100%);
        backdrop-filter: blur(5px) brightness(75%);
        width:100%;
        z-index: -1;
        ${(props) =>
        props.$visible && 
            `
                transform: translateY(0);
                height:100vh;
                opacity: 1;
                z-index:5;
            `
        }
    }
`

export const ButtonResponsive = styled.button`
    display: none;
    border: 1px solid ${colors.secondary};
    color: ${colors.primary};
    padding: 10px 15px;
    width: 100%;
    background-color: ${colors.secondary};
    font-size: 1rem;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-weight: 700;
    @media (max-width: 425px){
        display: block;
    }
`
export const NavLink = styled(StyledLink)`
    font-size: 1.05rem;
    padding: 1rem 0 0 .5rem;
    height: 50px;
    color: ${colors.primary};
    &:hover{
        background-color: ${colors.fourth};
        color: ${colors.secondary};
    }
    ${(props) =>
        props.$linkAccountSelected && 
            `
            background-color: ${colors.fourth};
            color: ${colors.secondary};
            `
    }
`    
export const Connexion = styled.div`
    display: flex;
    align-items: center;
    label{
        display: inline-block;
        width: 70px;
        position: relative;
        height: 40px;
        cursor: pointer;
        overflow: hidden;
    }
    input{
        position: absolute;
        top: -30px;
        left: -30px;
        width: 0;
        height: 0;
    }
    input + span{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${colors.fifth};
        border-radius: 20px;
    }
    input:checked + span{
        background-color: ${colors.sixth};
    }
    
    input + span:before{
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 4px;
        width: 32px;
        height: 32px;
        background-color: ${colors.primary};
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all .5s;
    }
    input:checked + span:before{
        left: 34px;
    }
    .txtoff, .txton{
        font-size: .9rem;
        margin-left: .5rem;
    }
    .txtoff{
        color: ${colors.red};
        display: block;
    }
    .txton{
        display: block;
        color: ${colors.sixth};
    }

`