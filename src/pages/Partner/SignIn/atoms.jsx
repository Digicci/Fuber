import styled from "styled-components";
import colors from "../../../colors";
import cover from "../../../assets/driver/shop.webp"

export const Container = styled.div`
    width: 100vw;
`
export const ContainerSignup = styled.div`
    width: 100%;
    height: 100%;
    padding: 8rem 3rem 10rem 0;
    display: flex;
    justify-content: end;
    ${(props) => 
        props.$cover &&
        `background: url(${cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        `
    }
`
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0 0 10px ${colors.purple};
    h2{
        font-size: 1.95rem;
        font-weight: 500;
        text-align: center;
    }
`
export const Form = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    
`
export const Select = styled.select`
    display: flex;
    font-size: 1rem;
    padding: 0.7rem 0.3rem;
    width: 60%;
    margin: .5rem .5rem;
    border: 1px solid ${colors.fifth};
    outline: none;
    
`
export const WhyUs = styled.div`
    width: 100%;
    height: 100%;
    margin: 5rem 10rem;
    h4{
        font-size: 1.8rem;
        font-weight: 200;
    }
    @media (max-width:1024px){
        margin:0;
        h4{
        margin:0 0 2rem 2rem;
        }
    }
`
export const ContainerInfo = styled.div`
    width: 100%;
    margin-bottom: 8rem;
`