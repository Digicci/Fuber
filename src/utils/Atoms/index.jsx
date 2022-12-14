import colors from "../../colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.secondary};
    font-size: 0.90rem;
    margin: 0 1rem;
    @media (max-width: 992px){
        margin: .5rem 0;
    }
    ${(props) =>
        props.$underline && 
        `position: relative;
        padding-bottom: .1rem;
        &:before{
            content:"";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height:0;
            border-bottom: 1px solid #000;
            transition: transform 1.5s cubic-bezier(.19,1,.22,1);
            transform: scaleX(0);
            transform-origin: right;
        }
        &:hover:before,
        &:focus:before{
            transform: scaleX(1);
            transform-origin: left;
        }
        
        `
    }
    ${(props) => 
        props.$isFullLink &&
        `background: ${colors.secondary};
        color: ${colors.primary};
        padding: .5rem 1.3rem;
        border-radius: 10px;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        transition: .3s;
        &:hover{
            background: rgba(0,0,0,0.825);
        }
        `
    }
    ${(props) =>
        props.$phone &&
        `border-radius: 500px;
        display: flex;
        align-items: center;
        padding: 8px 12px;
        transition: .3s;
        font-size: 1.15rem;
        &:hover{
            background: ${colors.secondary};
            color: ${colors.primary};
        }
        @media (max-width: 992px){
            background: ${colors.secondary};
            color: ${colors.primary};
        }`
    }
    ${(props) => 
        props.$disappearance &&
        `@media (max-width: 992px){
            display: none;
        }`
    }
    ${(props) =>
        props.$icon &&
        `color: ${colors.primary};
        font-size: 1.7rem;
        `
    }
    ${(props) =>
        props.$footerLink &&
        `color: ${colors.primary};
        font-size: .96rem;
        display: flex;
        margin-bottom: .5rem;
        &:hover{
            text-decoration: underline;
            color: ${colors.primary};
        }
        @media(max-width:1024px){
            margin-left: 0;
        }
        `
    }
`