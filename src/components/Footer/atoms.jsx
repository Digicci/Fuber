import styled from "styled-components";
import colors from "../../colors";


export const FooterWrapper = styled.footer`
    position: sticky;
    top: 100vh;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:flex-end;
    background: ${colors.secondary};
    padding: 2rem 3rem ;
    margin: 3rem 0 0 0 !important;
    @media (max-width: 992px){
        flex-direction: column;
        align-items: center;
    }
`
export const ContainerLogo = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
`
export const Img = styled.img`
    width: 100px;
`
export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: ${colors.primary};
`
export const ContainerLink = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 .5rem 15rem;
    @media (max-width:1024px){
        margin: 0 0 .5rem 0
    }
`
export const ContainerWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width:1024px){
        flex-direction:column;
        align-items:flex-start;
    }
`
export const Copyright = styled.div`
    color: ${colors.primary};
    font-size: .96rem;
    display: flex;
    margin: 0 0 .5rem 15rem;
    @media (max-width:1024px){
        margin: 0 0 .5rem 0
    }
`