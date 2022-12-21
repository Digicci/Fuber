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
        -webkit-transition: .3s;
        -moz-transition: .3s;
        transition: .3s;
        &:hover{
            background: rgba(0,0,0,0.825);
        }
        `
    }
    ${(props) =>
        props.$navLink &&
        `border-radius: 10px;
        @media (max-width: 768px){
            border-radius: 0;
        }`
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
    ${(props) => 
        props.$loginSignup &&
        `color : ${colors.secondary};
        font-size: .85rem;
        font-weight: 600;
        &:hover{
            text-decoration: underline;
        }
        `
    }
    ${(props) => 
        props.$isShadowLink && 
        `background : ${colors.fourth};
        padding: .5rem 1.3rem;
        `
    }
    ${(props) =>
        props.$xxl && 
        `font-size : 1.2rem;
        text-align:center;
        padding: 1rem 0;
        `
    }
    ${(props) => 
        props.$navVertical &&
        `font-size: 1rem;
        padding: 1rem 0;
        margin-bottom: .5rem; 
        `
    }
`

 export const StyledContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px -12px 48px;
    ${(props) => 
        props.$entete &&
        `
        align-items: center;
        h2{
            font-size:1.8rem;
            font-weight: 600;
            margin-bottom: .5rem;
        }
        p{
            font-size: .9rem;
            font-weight: 200;
        }`
    }
    
`
export const StyledForm = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const StyledContainerInput = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${(props) => 
        props.$icon &&
        `width: 10%;
        
        i{
            cursor:pointer;
        }
        `
    }
`
export const StyledInput = styled.input`
    width: 60%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    border: 1px solid #e0dfdd;
    border-radius: 5px;
    padding: .4rem .6rem;
    margin: .5rem;
    @media (max-width: 992px){
        width: 100%;
    }
    ${(props) => 
        props.$submit &&
        `background: #eeeeee;
        color: ${colors.secondary};
        justify-content:center;
        text-align: center;
        border:1px solid #e0dfdd;
        border-raduis: 5px;
        &:hover{
            background: #e2e2e2 !important;
        }
        `
    }
    ${(props) => 
        props.$connecter &&
        `background: ${colors.secondary};
        color: ${colors.primary};`
    }
`
export const StyledObliger = styled.p`
    font-size: .8rem;
    color: rgb(246, 10, 10);
    margin: 0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
`

export const StyledAccountSign = styled.div`
    text-align: center;
    margin: 2rem 0 1rem;
`