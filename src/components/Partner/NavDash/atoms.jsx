import styled from "styled-components";
import colors from "../../../colors"
import {
    StyledLink,
    ButtonLogout,
    ButtonResponsive
} from "../../../utils/Atoms";

export const Container = styled.div`
    display: flex;
    width: 20%;
    height: 80vh;
    background-color: ${colors.secondary};
    @media (max-width: 768px){
        width: 100%;
        height: 0;
        position: relative;
        flex-direction: column;
    }
    
`

export const Nav = styled.div`
    height: 100%;
    width: 100%;
    margin: 2.5rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px){
        height: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
        transition: all .5s ease-in;
        position: relative;
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


export const NavLink = styled(StyledLink)`
    font-size: 1.05rem;
    padding: .5rem 0 0 .5rem;
    height: 50px;
    color: ${colors.primary};
    display: flex;
    align-items: center;
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
export const Connexion = styled.div`
    margin-top: 1rem;
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
    @media (max-width: 768px){
        display: block;
        width: 100%;
        z-index: 10;
    }
`