import styled from "styled-components";
import colors from "../../../colors";

export const ContainerNav = styled.div`
    width: 100%;
    @media (max-width: 425px){
        width: 100%;
        position: relative;
    }
    
`
export const Nav = styled.div`
    height: 100%;
    margin: 2.5rem 0 4rem 0;
    padding: 1rem .8rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 425px){
        flex-direction: column;
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
    @media (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
    }
    @media (min-width: 1024px){
      flex-direction: row;
      display: flex;
    }
`
