import styled from "styled-components";
import colors from "../../../colors";

export const ContainerNav = styled.div`
    width: 30%;
    @media (max-width: 425px){
        width: 100%;
        position: relative;
    }
    
`
export const Nav = styled.div`
    height: 100%;
    margin: 2.5rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 425px){
        height: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
        transition: all .5s ease-in;
        position: absolute;
        transform: translateY(-100%);
        backdrop-filter: blur(5px) brightness(75%);
        width:100%;
        z-index: -1;
        ${(props) =>
        props.$visible && 
            `
                transform: translateY(0);
                height:100vh;
                opacity: 1;
                z-index:5;
            `
    }
    }
    
`
 export const ButtonResponsive = styled.button`
    display: none;
    border: 1px solid ${colors.secondary};
    color: ${colors.primary};
    padding: 10px 15px;
    width: 100%;
    background-color: ${colors.secondary};
    font-size: 1rem;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-weight: 700;
    @media (max-width: 425px){
        display: block;
    }
`