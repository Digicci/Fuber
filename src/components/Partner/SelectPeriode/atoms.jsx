import styled from 'styled-components'
import colors from '../../../colors'

export const Select = styled.select`
    display: flex;
    align-items: center;
    font-size: .9rem;
    padding: 0.7rem 0.3rem;
    border: 1px solid ${colors.sixth};
    border-radius: 5px;
    margin: 1rem 1rem;
    background: ${colors.fourth};
    &:focus{
        outline: none;
    }
    color: ${colors.secondary};
    @media (min-width: 768px) {
        width: 33%;
    }
`