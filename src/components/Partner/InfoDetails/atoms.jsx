import styled from "styled-components";
import colors from "../../../colors"

export const Card = styled.div`
    width: 25%;
    height: 70px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    margin: 1rem 0.5rem;
    overflow: hidden;
    box-shadow:-3px 0 13px 4px ${colors.fourth};
`
export const TopCard = styled.div`
    background: ${colors.sixth};
    color: ${colors.primary};
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
`
export const BottomCard = styled.div`
    background: ${colors.primary};
    color: ${colors.secondary};
    font-size: .9rem;
    overflow-wrap: break-word;
    p{
        text-align: center;
        padding : 0.5rem 0;
    }
`