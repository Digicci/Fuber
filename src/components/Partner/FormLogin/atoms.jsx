import styled from "styled-components";
import colors from "../../../colors";

export const Form = styled.form`
    display: flex;
    width: 60%;
    flex-direction: column;
`
export const DivInput = styled.div`
    display: flex;
    width: 100%;
    margin: 2rem 0;
    border-bottom: 1px solid ${colors.thirdly};
`
export const Input = styled.input`
    width: 90%;
    padding: .5rem .3rem;
    font-size: .97rem;
    border: none;
    outline: none;
`
export const Label = styled.label`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
`
export const DivForgot = styled.div`
    text-align: end;
    margin-bottom: 3rem;
    
`
export const Button = styled.button`
    padding: .7rem .3rem;
    font-size: 1.05rem;
    text-transform: uppercase;
    background: ${colors.sixth};
    color: ${colors.primary};
    border: none;
`
export const DivSignin = styled.div`
    margin: 1rem 0;
    text-align: center;
`