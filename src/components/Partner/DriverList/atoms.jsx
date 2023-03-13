import styled from "styled-components";
import colors from "../../../colors";
import { StyledLink } from "../../../utils/Atoms";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
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
    width: 100%;
    padding: 1rem 0;
`
export const DivDriver = styled.div`
    display: flex;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    overflow-wrap: break-word;
    width: 100%;
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
`
export const DivInfo = styled.div`
    display: flex;
    width: 20%;
    margin: 0.5rem;
`
export const Text = styled.p`
    font-size: .92rem;
    font-weight: 600;
`
export const Lien = styled(StyledLink)`
    display: flex;
    width: 100%;
`
export const Animation = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    animation: pulse 1s infinite;
    ${(props) =>
        props.$online && `
            background-color: ${colors.sixth};
        `
    }
    ${(props) =>
        props.$offline && `
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