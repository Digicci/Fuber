import styled from "styled-components";
import colors from "../../../colors";

export const Modal = styled.div`
    position : fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    ${(props) => 
        props.$modalDriver &&
            `justify-content: center;`
    }
`
export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 55%;
    height: 95%;
    overflow: hidden;
    background-color: ${colors.primary};
    justify-content: flex-start;
    @media (max-width: 768px){
        width: 60%;
    }
    @media (max-width: 576px){
        width: 100%;
    }
`
export const ContainerModal = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding: 1rem;
`