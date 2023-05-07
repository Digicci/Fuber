import styled from "styled-components";
import colors from "../../../colors";

export const DivClient = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
`
export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 5px 5px 0 0;
    background: ${colors.primary};
    color: ${colors.secondary};
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 2px 2px 5px 0px ${colors.shadow};
`
