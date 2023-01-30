import styled from "styled-components";
import colors from "../../../colors";

export const ContainerForm = styled.div`
padding: 0.5rem 1rem;
overflow-y: auto;
&::-webkit-scrollbar{
    width: 6px;
}
&::-webkit-scrollbar-thumb{
    background: ${colors.fifth};
}
`

export const DateAndCcv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
gap: 3rem;
`

export const ContainerAddCard = styled.div`
display: block;
width: 100%;

`