import styled from "styled-components";
import colors from "../../../colors";

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

export const Error = styled.span`
  color: red;
  text-align: center;
`
