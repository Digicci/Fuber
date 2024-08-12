import styled from "styled-components";
import colors from "../../../colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    padding: 3rem 4rem 0 4rem;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.sixth};
`

export const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: ${colors.secondary};
    padding: 1rem 0 1rem 0;
`
export const Alert = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${colors.secondary};
    background-color: #ff8c00;
    ${(props) => !props.$truePrice &&
      `
        height: 0;
        overflow: hidden;
        padding: 0;
      `
    }
`