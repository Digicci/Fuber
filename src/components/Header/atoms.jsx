import styled from "styled-components";
import colors from "../../colors";

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    background: ${colors.primary};
    box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
    z-index: 10000;
    height: 70px;
    padding: 0 83px;
    @media (max-width: 992px){
        justify-content: space-between;
        padding: 0 50px;
    }
    @media (max-width: 375px){
        padding: 0 5px;
    }
`
 export const HeaderLogo = styled.div`
    width: 30%;
    overflow: hidden;
    @media (max-width:992px){
        width: 100%;
    }
`
export const HeaderImg = styled.img`
    width: 120px;
`
export const StyledNav = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5rem;
    @media (max-width : 992px){
        width : 40%;
    }
`
export const StyledNavGroup = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7rem;
    @media (max-width: 992px){
        margin: 0;
        justify-content: center;
        width: 100%;
    }
`