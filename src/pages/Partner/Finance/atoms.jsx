import styled from 'styled-components';
import colors from '../../../colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0;
`

export const Title = styled.h2`
    font-size: 1.65rem;
    font-weight: 600;
    display: flex;
    border-bottom : 1px solid ${colors.sixth};
    padding-bottom: 0.5rem;
    margin : 1rem;
`

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin : 1.5rem 0 1.5rem 0;
    @media (min-width: 769px) {
        justify-content: center;
    }
`

export const Select = styled.select`
    display: flex;
    border: 1px solid ${colors.sixth};
    border-radius: 5px;
    margin: 1rem 1rem;
    padding: 0.7rem 0.3rem;
    font-size: .9rem;
    color: ${colors.secondary};
    background: ${colors.fourth};
    &:focus{
        outline: none;
    }
    align-items: center;
    @media (min-width: 769px) {
        width: 33%;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    @media (min-width: 769px) {
        width: 50%;
    }
`

export const H4 = styled.h4`
    display: flex;
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.secondary};
    border-bottom: 2px solid ${colors.sixth};
    padding-bottom: 0.5rem;
    width: 100%;
`

export const ContainerSelect = styled.div`
  display: flex;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`