import styled from "styled-components";
import colors from "../../../colors"

export const Container = styled.div`
    width: 100vh;
    display: flex;
    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

