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
    ${(props) =>
        props.$linkDriver &&
        `margin: 0 .5rem;
        width: 250px;
        border-radius: 5px;
        `
    }
    ${(props) =>
        props.$linkProfile &&
        `font-size: 1.05rem;
        
        padding 1rem 0;
        height: 50px;

        &:active{
            border-left: 4px solid ${colors.secondary};
            background: ${colors.fourth};
        }
        &:hover{
            background: ${colors.fourth};
        }
        `
    }
    ${(props) =>
        props.$logoutProfil &&
        `width : 120px;
        color: red;
        background: ${colors.fourth};
        padding: .7rem .8rem;
        cursor: pointer;
        margin: 0;
        `
    }
    ${(props) =>
        props.$userProfil &&
        `
        margin: 0;
        `
    }
    ${(props) =>
        props.$deleteWallet &&
        `width: 12%;
        height:35px;
        display:flex;
        justify-content: center;
        align-items: center;
        background: red;
        color: ${colors.primary};
        font-size: .85rem;
        border-radius:500px;
        cursor: pointer;
        `
    }
    ${(props) =>
        props.$addCard && 
        `
        height: 50px;
        border-bottom: 1px solid ${colors.fourth};
        padding-bottom: 1rem;
        margin-top: 2rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        `
    }
    ${(props) => 
        props.$linkModal &&
        `font-size: 1.2rem;
        cursor: pointer;
        &:hover{
            color: ${colors.sixth}
        }
        `
    }
    ${(props) =>
        props.$buttonMyRaces &&
        `background: ${colors.sixth};
        color: ${colors.primary};
        justify-content:center;
        border: 1px solid transparent;
        text-align: center;
        border-radius: 25px;
        padding: 1rem;
        margin: 0;
        font-size: .95rem;`
    }
    ${(props) =>
        props.$buttonOldRaces &&
        `background: ${colors.primary};
        color: ${colors.secondary};
        justify-content:center;
        border: 1px solid transparent;
        text-align: center;
        border-radius: 25px;
        padding: 1rem;
        margin: 0;
        font-size: .95rem;
        &:hover{
            background:${colors.secondary};
            color: ${colors.primary};
        }`
    }
`
// styled for Login and Signup

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
    ${(props) => 
        props.$formAddCard &&
        `width: 100%;
        height:100%;
        margin: 1rem 0 0 0;
        `
    }

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
    ${(props) =>
        props.$containerFormCard &&
        `width: 100%;
        align-items: flex-start;

        justify-content: space-around;
        margin-bottom: 1.5rem;
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
        border-radius: 5px;
        &:hover{
            background: ${colors.shadow}!important;
        }
        `
    }
    ${(props) => 
        props.$connecter &&
        `background: ${colors.secondary};
        color: ${colors.primary};`
    }
    ${(props) =>
        props.$inputAddCard &&
        `padding: 0.7rem 0.3rem;
        width: 100%;
        margin: 0.5rem 0;
        border: none;
        background: ${colors.fourth};
        font-size: .9rem;
        outline: none;
        `
    }
    ${(props) =>
        props.$colorAddCard &&
        `background: ${colors.secondary};
        color: ${colors.primary};
        width: 100%;
        margin: .5rem 0;
        &:hover {
            background:${colors.shadow};
        }
        `
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
export const LabelForm = styled.label`
    font-size: .95rem;
    margin-bottom: .5rem;
`
export const SelectForm = styled.select`
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.7rem 0.3rem;
    width: 100%;
    margin: 0.5rem 0;
    border: none;
    background: ${colors.fourth};
    font-size: .9rem;
    outline: none;
`
// styled Profile

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    ${(props) =>
        props.$profile &&
        `align-items: flex-start `
    }
`

export const AvatarIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 4px 2px ${colors.shade};
    ${(props) =>
        props.$avatarProfile &&
        `margin: 1rem 0 0 .5rem;`
    }
`

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

// Styled personal information

export const ContainerProfile = styled.div`
    width: 100%;
    display: flex;
`
export const ContainerInfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 ;
`
export const TitlePage = styled.h2`
    font-size: 1.65rem;
    font-weight:600;
    display: flex;
`
 export const Number = styled.p`
    font-size: 1.15rem;
    margin: 1rem 0 1rem;
`
 export const Label = styled.p`
    margin-top: 1rem;
    font-size: 1.05rem;
    font-weight: 600;
`

// Modal

export const StyledClose = styled.div`
    text-align: end;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-right: 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
`
export const StyledContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background : ${colors.primary};
    justify-content: flex-start;
    ${(props) => 
        props.$modalHeight &&
        `height: 70%;`
    }
    @media (max-width: 425px){
        width:80%;
    }
    @media (min-width: 1440px){
        width: 22%;
        ${(props) =>
            props.$modalHeight &&
            `width: 40%;`
        }
    }
`
export const StyledModal = styled.div`
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
    ${(props) => 
        props.$modalPayment &&
        `justify-content: center;`
    }
`
export const ContainerModal = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 1rem;
    ${(props) =>
        props.$containerMyRaces &&
        `width: 25%;
        padding: 1rem 0;
        `
    }
`