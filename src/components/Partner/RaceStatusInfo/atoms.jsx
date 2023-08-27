import styled from 'styled-components'
import colors from '../../../colors'

export const DivRace = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${colors.fifth};
    @media (max-width:768px) {
        width: 80%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media (max-width:425px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media (min-width:1024px) {
        width: 100%;
    }
`
export const Info = styled.div`
    width: 45%;
    padding: 0 1rem;
    h4{
        font-size: 1.15rem;
        font-weight: 600;
        margin: 0 0 .5rem;
    }
    h5{
        font-size: .9rem;
        font-weight: 100;
        padding: .5rem;
    }
    @media (max-width:768px) {
        width: 100%;
    }
`