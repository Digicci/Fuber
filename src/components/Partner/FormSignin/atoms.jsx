import styled from "styled-components";
import colors from "../../../colors";

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
export const Select = styled.select`
    display: flex;
    font-size: 1rem;
    padding: 0.7rem 0.3rem;
    width: 60%;
    margin: .5rem .5rem;
    border: 1px solid ${colors.fifth};
    outline: none;
    
`