import styled from "styled-components";
import colors from "../../colors";

export const Email = styled.p`
    font-size: 1rem;
    margin: .5rem 0 1rem 0 ;
`
export const ButtonUpdate = styled.button`
    border: none;
    background: transparent;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 .5rem;
`
export const UserName = styled.p`
    margin: 0;
    font-size : 1.2rem;
    text-align:center;
    padding: 1rem 0;
`
export const DivUpdate = styled.div`
    width: 100%;
    display: flex;
`
export const ValideModif = styled.button`
    background: ${colors.sixth};
    color: ${colors.primary};
    padding: .5rem 1.3rem;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
    width:fit-content;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 400;
    margin-top:.5rem;
`