import styled from "styled-components";
import colors from "../../colors";

export const StyledConnectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-bottom: solid ${colors.secondary} 1px;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px){
        gap: 0;
    }
`
export const LogoNav = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 2rem;
`
export const ImgNav = styled.img`
    width: 150px;
`