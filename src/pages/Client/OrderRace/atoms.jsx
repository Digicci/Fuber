import styled from "styled-components";
import colors from "../../../colors";


export const ContainerOrder = styled.div`
    width: 96vw;
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem 0;
    @media (max-width:768px){
        flex-direction: column-reverse;
        
    }
`
export const Order = styled.div`
    width: 30%;
    box-shadow: 12px 0 31px 9px ${colors.fourth} ;
    background: ${colors.primary};
    border-radius: 5px;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1rem 0;
    }
    @media (max-width:768px) {
        width: 100%;
    }
    @media (min-width:1024px){
        width: 45%;
    }
`
export const ChangeCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 0 0;
    cursor: pointer;
    p{
        margin: 0;
    }
    span{
        display: flex;
        align-items: center;
    }
`

export const WarningInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 0 0;
    cursor: pointer;
    color: ${colors.red};
`



