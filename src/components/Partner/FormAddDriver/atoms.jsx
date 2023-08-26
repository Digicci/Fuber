import styled from "styled-components";
import colors from "../../../colors";

export const Form = styled.form`
    display: flex;
    position: absolute;
    left: 100%;
    width: 100%;
    height: 80%;
    background: ${colors.primary};
    flex-direction: column;
    overflow-y: scroll;
    transition: all .5s ease-in-out;
    @media (max-width: 768px){
        width: 100%;
    }
    ${(props) =>
        props.$slider &&
            `left: 0%;
            `
    }
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

export const Button = styled.button`
    padding: .7rem .3rem;
    font-size: 1.05rem;
    text-transform: uppercase;
    background: ${colors.sixth};
    color: ${colors.primary};
    border: none;
    ${(props) =>
        props.$cancel &&
            `background: ${colors.primary};
            color: ${colors.secondary };
            i{
                font-size: 1.5rem;
            }
            `
    }
`
export const DivSignin = styled.div`
    margin: 1rem 0;
    text-align: center;
    ${(props) =>
        props.$carInfo &&
            `text-align: left;
            margin: 1rem;
            `
    }
`

export const Select = styled.select`
    display: flex;
    align-items: center;
    font-size: .97rem;
    padding: 0.5rem 0.3rem;
    width: 100%;
    border-bottom: 1px solid ${colors.thirdly};
    margin: 2rem 0;
    background: ${colors.primary};
    outline: none;
    color: ${colors.secondary};
`
export const Error = styled.span`
  color: red;
  text-align: center;
`