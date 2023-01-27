import styled from "styled-components";
import colors from "../../../colors";
import cover from "../../../assets/driver/shop.webp"

export const Container = styled.div`
    width: 100vw;
    height:100vw;
`
export const ContainerSignup = styled.div`
    width: 100vw;
    height:auto;
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
    width: 50%;
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
    
`