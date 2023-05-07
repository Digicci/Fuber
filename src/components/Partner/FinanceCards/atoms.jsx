import styled from "styled-components";
import colors from "../../../colors"

export const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    margin: 1rem 0.5rem;
    overflow: hidden;
    box-shadow:-3px 0 13px 4px ${colors.fourth};
    @media (min-width: 768px) {
        width: 20%;
        margin: 1rem;
    }
`
export const TopCard = styled.div`
    background: ${colors.primary};
    color: ${colors.secondary};
    font-size: 1.2rem;
    display: flex;
    height : 50px;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 1rem;
    ${(props) =>
        props.$firstText &&
        `
        p{
            border-bottom: 1px solid ${colors.sixth};
        }
        `
    }
`
export const BottomCard = styled.div`
    background-color: ${colors.yellow};
    background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
    color: ${colors.primary};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    overflow-wrap: break-word;
    i{
        font-size: 1.5rem;
    }
`