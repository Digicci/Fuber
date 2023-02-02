import styled from "styled-components";
import colors from "../../../colors";
import creditCard from '../../../assets/creditCard.png'

export const H3 = styled.h3`
    font-size: 1.5rem;
    margin: 4rem 0;
    font-weight: 100;
`
export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 80%;
    @media (max-width:1031px) {
        grid-template-columns: 1fr;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px;
    @media (max-width:768px) {
        justify-content: flex-start;
        flex-direction: column;
        width: 70%;
        align-items: center;
        padding: 10px;
    }
`
export const Card =styled.div`
    background: url(${creditCard});
    background-size: 600px;
    background-position: center;
    border-radius: 10px;
    padding: 1rem .5rem;
    margin-right: 1rem;
    width: 315px;
    aspect-ratio: 86/51;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 10px ${colors.shadow};
    @media (max-width: 414px) {
      background-size: 600px;
      background-position: center;
      margin: 0;
    }
`
export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .95rem;
    padding: 0 10px;
    color: ${colors.primary};
    text-transform: uppercase;
    font-weight: 600;
`
export const CardText = styled.p`
    color: ${colors.primary};
    ${(props) =>
        props.$numberCard &&
        `margin:  0 10px;
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
    min-width: 90px;
    height:35px;
    display:flex;
    justify-content: center;
    padding: 10px 15px;
    align-items: center;
    background: red;
    color: ${colors.primary};
    font-size: .85rem;
    border-radius:500px;
    border: none;
    margin: .5rem 0;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: .5px;
    text-transform: uppercase;
    @media(max-width:425px){
        display: block;
        width: 30%;
    }
`

export const LoaderWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`