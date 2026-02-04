import styled from "styled-components";
import colors from "../../../colors";

export const Message = styled.p`
  width: 300px;
  color: ${colors.seventh};
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    border-radius: 30px;
    padding: 2rem 3rem;
    h2{
        padding: 1rem;
        font-size: 1.95rem;
        font-weight: 500;
        text-align: center;
    }
    @media (max-width:425px){
        width: 100%;
    }
    @media (max-width:768px){
      width: 100%;
    }
`

export const Input = styled.input`
    width: 90%;
    padding: .5rem .3rem;
    font-size: .97rem;
    border: none;
    outline: none;
`

export const Button = styled.button`
    padding: .7rem .3rem;
    font-size: 1.05rem;
    text-transform: uppercase;
    background: ${colors.sixth};
    color: ${colors.primary};
    border: none;
`