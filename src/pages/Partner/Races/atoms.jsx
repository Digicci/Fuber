import styled from 'styled-components';
import colors from '../../../colors';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 2.5rem 0;
`

export const Title = styled.h2`
    font-size: 1.65rem;
    font-weight: 600;
    display: flex;
    border-bottom : 1px solid ${colors.sixth};
    padding-bottom: 0.5rem;
`
export const Modal = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 1rem 0;
    width: 25%;
`
export const Button = styled.button`
${(props) =>
    props.$buttonRaces &&
        `background: ${colors.primary};
        color: ${colors.secondary};
        justify-content:center;
        border: 1px solid transparent;
        text-align: center;
        border-radius: 25px;
        padding: 1rem;
        margin-right: .5rem;
        font-size: .95rem;
        &:hover{
            background: ${colors.sixth};
            color: ${colors.primary};
        }`
    }
    ${(props) =>
        props.$buttonRacesSelected &&
            `background: ${colors.sixth};
            color: ${colors.primary};
            justify-content:center;
            border: 1px solid transparent;
            text-align: center;
            border-radius: 25px;
            padding: 1rem;
            margin: 0;
            font-size: .95rem;
        `
    }
    ${(props) =>
        props.$buttonOldRaces &&
            `background: ${colors.primary};
            color: ${colors.secondary};
            justify-content:center;
            border: 1px solid transparent;
            text-align: center;
            border-radius: 25px;
            padding: 1rem;
            margin: 0;
            font-size: .95rem;
            &:hover{
                background:${colors.secondary};
                color: ${colors.primary};
            }
        `
    }
    ${(props) =>
        props.$buttonOldRacesSelected &&
            `background:${colors.secondary};
            color: ${colors.primary};
            justify-content:center;
            border: 1px solid transparent;
            text-align: center;
            border-radius: 25px;
            padding: 1rem;
            margin: 0;
            font-size: .95rem;
        `
    }
`
export const Select = styled.select`
    display: flex;
    align-items: center;
    font-size: .9rem;
    padding: 0.7rem 0.3rem;
    width: 100%;
    border: 1px solid ${colors.sixth};
    border-radius: 5px;
    margin: 1rem 0;
    background: ${colors.fourth};
    outline: none;
    color: ${colors.secondary};
`
