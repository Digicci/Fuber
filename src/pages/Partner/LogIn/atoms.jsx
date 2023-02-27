import styled from "styled-components";
import colors from "../../../colors";
import cover from "../../../assets/driver/shop.webp"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    @media (max-width: 768px){
        flex-direction: column;
    }
    
`
export const ContainerLogin = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.$cover && 
        `width: 60%;
        align-items:center;
        justify-content: center;
        background: url(${cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        @media (max-width: 768px){
            width: 100%;
        }
        `
    }
    ${(props) => 
        props.$form && `
            width: 50%;
            background: ${colors.primary};
            justify-content: flex-start;
            @media (max-width: 768px){
                width: 100%;
            }
        `
    }
`
export const Title = styled.div`
    color: ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    width: 40%;
    margin-right: 4rem;
    img{
        width: 100%;
        vertical-align: middle;
    }
    p{
        font-size: 1.1rem;
        font-weight: 300;
        margin: 0 0 2rem 0;
    }
    @media (max-width:425px){
        width: auto;
        margin: 0;
        padding: 0;
    }
    @media (max-width:768px){

    }
`
export const Close = styled.i`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    margin-top: .5rem;
`
export const ContainerForm = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
    img{
        width: 50%;
        vertical-align: middle;
    }
`