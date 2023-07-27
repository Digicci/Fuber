import styled from "styled-components";
import colors from "../../../colors";
import { StyledLink } from "../../../utils/Atoms";

export const DivDriver = styled.div`
    display: flex;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    overflow-wrap: break-word;
    width: 100%;
    @media (max-width: 768px) {
        width: 100vw;
    }
`
export const DivImg = styled.div`
    padding: 0.3rem 0;
    text-align: center;
    border-radius: 10px;
    background-color: ${colors.yellow};
    background-image: linear-gradient(45deg, ${colors.yellow} 0%, ${colors.pink} 100% );
    width: 10%;
    img{
        width: 40px;
    }
    @media (max-width: 768px) {
        width: 15%;
        img{
            width: 50px;
        }
    }
`
export const DivInfo = styled.div`
    display: flex;
    width: 20%;
    margin: 1rem;
    i{
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        width: 15%;
        i{
            font-size: 2rem;
        }
    }
`
export const Text = styled.p`
    font-size: .92rem;
    font-weight: 600;
`
export const Lien = styled(StyledLink)`
    display: flex;
    width: 100%;
    @media (max-width: 768px) {
        width: 100vw;
    }
`
export const Animation = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    ${(props) =>
        props.$online ? `
            background-color: ${colors.sixth};
            animation: pulse 1s infinite;
        ` : `
            background-color: ${colors.red};
        `
    }

    @keyframes pulse {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.3);
        }
    }
`
export const Button = styled.button`
    border : none;
    background-color: ${colors.primary};
    cursor: pointer;
`
