import styled from "styled-components";
import colors from "../../../colors";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`
export const H4 = styled.h4`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.secondary};
    border-bottom: 2px solid ${colors.secondary};
    padding-bottom: 0.5rem;
    width: 100%;
    i{
        font-size: 1.5rem;
    }
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    @media (max-width: 768px) {
        padding: 1rem 0;
        width: 100vw;
    }
`
