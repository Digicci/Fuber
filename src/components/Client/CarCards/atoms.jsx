import styled from "styled-components";
import colors from "../../../colors";

export const TypeChoiceCar = styled.div`
    width: 100%;
    height:200px;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${colors.fifth};
    }
`

export const NoDriver = styled.p`
    color: ${colors.sixth};
    font-size: 1.5rem;
    text-align: center;
    margin: 40px 0 0;
    padding: 0;
`
