import styled from "styled-components";
import colors from "../../../colors"

export const Modal = styled.div`
    position : fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(38,38,38,0.8);
    transform: translateX(4000px);
    z-index: 10000;
    ${(props) =>
        props.$isOpen &&
            `transform : translateX(0);`
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 95%;
    overflow: hidden;
    background-color: ${colors.primary};
    justify-content: flex-start;
    @media (max-width: 768px){
        width: 60%;
    }
    @media (max-width: 425px){
        width: 100%;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${colors.primary};
`
export const DivProfil = styled.div`
    display: flex;
    margin-top: 1rem;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 0 1rem 0 0.3rem;
    }
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 1rem;
    h6{
        font-size: 1.2rem;
        font-weight: 600;
    }
    p{
        font-size: .8rem;
        margin-top: 0.5rem;
    }
`
export const DivDelete = styled.div`
    display: flex;
    justify-content: center;
`
export const Delete = styled.button`
    margin: 1rem 0;
    font-size: .9rem;
    color: ${colors.primary};
    background-color: ${colors.red};
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 30%;
    padding: 1rem;
`
   