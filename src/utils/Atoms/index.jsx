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
        props.$disappear &&
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
            padding 1rem 0 0 .5rem;
            height: 50px;
            &:hover{
                background: ${colors.fourth};
            }
        `
    }
    ${(props) =>
        props.$linkProfileSelected &&
            `font-size: 1.05rem;
            padding rem 0;
            height: 50px;
            border-left: 4px solid ${colors.secondary};
            background: ${colors.fourth};
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
        props.$headerDriver && 
        `color: ${colors.primary};
        .ph-user{
            margin-right: 5px;
        }
        `
    }
    ${(props) =>
        props.$forgotEntreprise && `
        font-size: .9rem;
        color: ${colors.red};
        `
    }
    ${(props) =>
        props.$signinEntreprise && `
        color: ${colors.secondary};
        font-size: .85rem;
        font-weight: 600;
        `
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
    ${(props) => 
        props.$signinDriver &&
        `@media (max-width: 768px){
        width: 80%;
    }
        `
    }
`
export const InputUpdate = styled.input`
    width: 40%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    border: 1px solid #e0dfdd;
    border-radius: 5px;
    padding: .4rem .6rem;
    margin: .5rem;
    @media (max-width:425px){
        width: 40%;
    }
    @media (min-width:758px){
        width: 25%;
    }
    @media (min-width:1024px){
        width: 40%;
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
    padding: 0.7rem 0.3rem;
    width: 100%;
    margin: 0.5rem 0;
    border: none;
    background: ${colors.fourth};
    font-size: .9rem;
    outline: none;
`
export const ButtonLogout = styled.button`
    background: ${colors.secondary};
    color: ${colors.primary};
    padding: .5rem 1.3rem;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
    cursor: pointer;
    &:hover{
        background: ${colors.red};
    }
    ${(props) => 
        props.$buttonRadius &&
            `border-radius: 10px;
            @media (max-width: 768px){
                border-radius: 0;
            }
            `
    }
    ${(props) =>
        props.$logoutDisappear &&
            `@media (max-width: 992px){
                display: none;
            }
            `
    }
`
export const ProfileLogout = styled.button`
    background: ${colors.fourth};
    color: ${colors.red};
    padding: .5rem 1.3rem;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
    width:fit-content;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 400;
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
    @media (max-width: 425px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background : ${colors.primary};
    justify-content: flex-start;
    ${(props) => 
        props.$modalHeight &&
            `height: auto;`
    }
    ${(props) => 
        props.$modalDetails &&
        `width:30%;`
    }
    @media (max-width: 768px){
        width:60%;
        height:100%;
        ${(props) => 
            props.$modalDetails &&
            `width:80%;
            height:auto;`
        }
    }
    @media (max-width:425px){
        ${(props) => 
        props.$modalHeight &&
            `height: auto;
            width:100%;`
    }
    }
    @media (min-width: 1440px){
        width: 22%;
        ${(props) =>
            props.$modalHeight &&
            `width: 40%;`
        }
        ${(props) => 
            props.$modalDetails &&
            `width:30%;`
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
    z-index: 10000;
    ${(props) => 
        props.$isOpen &&
            `transform : translateX(0);`
    }
    ${(props) => 
        props.$modalPayment &&
            `justify-content: center;`
    }
`
export const ContainerModal = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding: 1rem;
    ${(props) =>
        props.$containerMyRaces &&
            `width: 25%;
            padding: 1rem 0;
            justify-content: space-between;
            `
    }
    ${(props) =>
        props.$addDriver &&
            `
            overflow-y: scroll;
            `
    }
`
 export const TitleModal = styled.h5`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    ${(props) =>
        props.$titleDetails && 
        `border-bottom: 1px solid ${colors.sixth};
        padding-bottom: 1rem;`
    }
`


//MyRaces
export const MyRaceH3 = styled.h3`
    font-size: 1.15rem;
    font-weight: 600;
    @media (max-width:425px){
        width: 100%;
    }
`
export const ContainerMyRaces = styled.div`
    width: 70%;
    margin: 3rem 0 0 0;
    padding: 1rem 0;
    @media (max-width:425px){
        width: 100%;
    }
`
export const RaceInProgress = styled.h3`
    margin: 2rem 0 3rem 0;
    font-size:1.55rem;
    color: ${colors.sixth};
    text-decoration: underline;
    font-weight: 200;
`
export const DivRace = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${colors.fifth};
    @media (max-width:768px) {
        width: 80%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media (max-width:425px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media (min-width:1024px) {
        width: 100%;
    }
`
export const RaceImg = styled.img`
    width: 20%;
    @media (max-width:768px) {
        width: 40%;
        margin: 0 0 0 .5rem;
    }
    
`
export const InfoRace = styled.div`
    width: 45%;
    padding: 0 1rem;
    h4{
        font-size: 1.15rem;
        font-weight: 600;
        margin: 0 0 .5rem;
    }
    h5{
        font-size: .9rem;
        font-weight: 100;
        padding: .5rem;
    }
    @media (max-width:768px) {
        width: 100%;
    }
`
export const DivButton = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:768px) {
        width: 100%;
    }
`
export const ButtonRaceFinish = styled.div`
    width: 60%;
    background: ${colors.sixth};
    color: ${colors.primary};
    border-radius: 10px;
    font-size: 1.05rem;
    padding: .6rem .9rem;
    text-align: center;
    ${(props) =>
        props.$noteRace &&
            `background: ${colors.fourth};
            color:${colors.secondary};
            `
    }
    @media (max-width:768px) {
        width: 100%;
    }
`
export const ButtonRace = styled.button`
    ${(props) =>
        props.$buttonMyRaces &&
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
                background: ${colors.sixth};
                color: ${colors.primary};
            }`
    }
    ${(props) =>
        props.$buttonMyRacesSelected &&
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
    ${(props) =>
        props.$buttonOldRacesSelected &&
            `background:${colors.secondary};
            color: ${colors.primary};
            justify-content:center;
            border: 1px solid transparent;
            text-align: center;
            border-radius: 25px;
            padding: 1rem;
            margin: 0;
            font-size: .95rem;`
    }
    
`
// ORDER

export const ButtonOrder = styled.button`
    width: 50%;
    font-size: .9rem;
    color: ${colors.primary};
    background: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    padding: .8rem 1rem;
    margin: 1rem 0 0 0;
    cursor: pointer;
    border: none;
    @media (max-width:768px){
        width: 100%;
    }
    ${({$disabled}) => $disabled && `
        background: ${colors.fourth};
        color: ${colors.primary};
        cursor: not-allowed;
    `
    }
`

//HEADER

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    background: ${colors.primary};
    box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
    z-index: 10000;
    height: 70px;
    padding: 0 83px;
    @media (max-width: 992px){
        justify-content: space-between;
        padding: 0 50px;
    }
    @media (max-width: 375px){
        padding: 0 5px;
    }
    ${(props) => 
        props.$driverHeader &&
        `justify-content: space-between;
        background:${colors.secondary};
        padding: 0 41px;
        `
    }
`
 export const HeaderLogo = styled.div`
    width: 30%;
    overflow: hidden;
    @media (max-width:992px){
        width: 100%;
    }
`
export const HeaderImg = styled.img`
    width: 120px;
`
export const StyledNav = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5rem;
    @media (max-width : 992px){
        width : 40%;
    }
    ${(props) => 
        props.$navDriver &&
        `justify-content: end;`
    }
`
export const StyledNavGroup = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7rem;
    @media (max-width: 992px){
        margin: 0;
        justify-content: center;
        width: 100%;
    }
`


export const Loader = styled.div`
  box-shadow: 
          0 4px 0 ${colors.sixth}, 
          4px 0 0 ${colors.primary}, 
          4px 4px 0 ${colors.purple}, 
          -4px 0 0 ${colors.primary}, 
          0 -4px 0 ${colors.sixth}, 
          -4px -4px 0 ${colors.purple};
  border: 4px solid transparent;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
//STEP

export const ContainerStep = styled.div`
  display:flex;
  justify-content: space-evenly;
  @media (max-width:1024px){
    justify-content: center;
    margin: 3rem;
  }
  @media (max-width:768px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
`
export const DivText = styled.div`
  width: 250px;
  text-align: center;
  margin-top: 1rem;
  padding: 0 1rem;
  display: block;
  ${(props) =>
    props.$textDriver &&
   `width: auto;
    text-align: start;
    `
  }
  h5{
    text-align: start;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 100;
  }
  .partenaire{
    margin-top: 5rem;
    height:30px;
  }
`
export const Ptext = styled.p`
  font-size: 1rem ;
  font-weight: 600;
  ${(props) =>
    props.$child2 &&
    `font-size: .8rem;
    padding: .2rem 1.5rem;
    `
  }
  ${(props) => 
    props.$pDriver &&
    `font-weight: 300;
    margin-bottom: 1.5rem;`
  }
`
export const Step = styled.div`
  margin-right: 15rem;
  @media (max-width:1024px){
    margin-right: 0;
  }
`
export const CcmImg = styled.img`
  width: 250px;
  ${(props) => 
    props.$driverImg &&
    `width: 550px;
    @media (max-width:425px){
      width:200px;
    }
    `}
    ${(props) => 
    props.$functioningImg &&
    `width: 400px;
    @media (max-width:1024px){
      width: 300px;
      margin-left:10rem;
    }
    `}
`
export const DivImg = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  position: relative;
  transform: scale(0.8);
  
  ${(props) =>
    props.$divDriver &&
    `width: 550px;
    margin-top: 0;
    @media (max-width:425px){
      width: 200px;
    }
    `
  }
  ${(props) =>
    props.$divFunctioning &&
    `width: 400px;
    margin: 0;
    @media (max-width:1024px){
      width: 200px;
      margin: 0;
    }
    `
  }
`
// Nav Profile

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
// Dashboard Driver

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: 1rem 1rem 0 1rem;
    
    ${(props) =>
        props.$rowDriver &&
        `margin-top: 2rem;
        `
    }
    @media (max-width: 768px){
        ${(props) =>
            props.$rowDriver &&
            `flex-direction: column;
            margin: 1rem 0;
            width: 100vw;
            `
        }
        ${(props) =>
            props.$col &&
            `display: grid;
            grid-template-columns: repeat(2, 1fr);
            `
        }
    }
    @media (max-width: 425px){
        ${(props) =>
            props.$col &&
            `display: flex;
            flex-direction: column;
            `
        }
    }

`