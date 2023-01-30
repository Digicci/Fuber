import styled from "styled-components";
import colors from "../../../colors";

export const H3 = styled.h3`
    font-size: 1.5rem;
    margin: 4rem 0;
    font-weight: 100;
`
export const ContainerCard = styled.div`
    display: flex;
    @media (max-width:768px) {
        flex-direction: column;
    }
`
export const Card =styled.div`
    width: 30%;
    height: auto;
    background: ${colors.fourth};
    border: 1px solid ${colors.fifth};
    border-radius: 10px;
    padding: 1rem .5rem;
    margin-right: 2rem;
    @media(max-width: 425px){
        width: 100%;
    }
    @media(min-width: 768px){
        width: 60%;
    }
    @media (min-width: 1024px) {
        width: 30%;
    }
`
export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .95rem;
`
export const CardText = styled.p`
    margin: 0 0 1rem 0 ;
    ${(props) =>
        props.$numberCard &&
        `margin: 2rem 0;
        font-size: 1.5rem;
        `
    }
`
export const AddText =  styled.span`
    font-size: 1.05rem;
    font-weight: 600;
    padding-left: 5px;
`
export const AddIcon = styled.i`
    font-size: 1.5rem;
`
export const ButtonDelete = styled.button`
    width: 12%;
    height:35px;
    display:flex;
    justify-content: center;
    align-items: center;
    background: red;
    color: ${colors.primary};
    font-size: .85rem;
    border-radius:500px;
    border: none;
    margin: .5rem 0;
    cursor: pointer;
    @media(max-width:425px){
        display: block;
        width: 30%;
    }
`