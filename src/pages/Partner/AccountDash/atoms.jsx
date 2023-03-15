import styled from "styled-components";
import colors from "../../../colors"

export const Container = styled.div`
    width: 100vw;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

