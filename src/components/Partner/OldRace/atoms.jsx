import styled from "styled-components";
import colors from "../../../colors";

export const H3 = styled.h3`
    font-size: 1.15rem;
    font-weight: 600;
    @media (max-width:425px){
        width: 100%;
    }
`
export const Container = styled.div`
    width: 70%;
    margin: 3rem 0 0 1rem;
    padding: 1rem 0;
    @media (max-width:425px){
        width: 100%;
    }
`
export const InProgress = styled.h3`
    margin: 2rem 0 3rem 0;
    font-size:1.55rem;
    color: ${colors.sixth};
    text-decoration: underline;
    font-weight: 200;
`
export const DivRace = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${colors.fifth};
    @media (max-width:768px) {
        width: 80%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media (max-width:425px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media (min-width:1024px) {
        width: 100%;
    }
`
export const Info = styled.div`
    width: 45%;
    padding: 0 1rem;
    h4{
        font-size: 1.15rem;
        font-weight: 600;
        margin: 0 0 .5rem;
    }
    h5{
        font-size: .9rem;
        font-weight: 100;
        padding: .5rem;
    }
    @media (max-width:768px) {
        width: 100%;
    }
`
export const DivButton = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:768px) {
        width: 100%;
    }
`
export const ButtonFinish = styled.div`
    width: 60%;
    background: ${colors.sixth};
    color: ${colors.primary};
    border-radius: 10px;
    font-size: 1.05rem;
    padding: .6rem .9rem;
    text-align: center;
    ${(props) =>
        props.$noteRace &&
            `background: ${colors.fourth};
            color:${colors.secondary};
            `
    }
    @media (max-width:768px) {
        width: 100%;
    }
`