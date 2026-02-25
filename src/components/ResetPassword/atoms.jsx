import colors from '../../colors'
import styled from 'styled-components'

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    
    height: fit-content;
    align-items: center;
    background: ${colors.primary};
    padding: 2rem 3rem;
    h2{
        padding: 1rem;
        font-size: 1.95rem;
        font-weight: 500;
        text-align: center;
    }
    @media (max-width:425px){
        width: 100%;
    }
    @media (max-width:768px){
      width: 100%;
    }
`

export const ContainerInput = styled.div`
  margin: 2.5rem 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 60%;
`

export const Input = styled.input`
    width: 50%;
    padding: .5rem .3rem;
    margin-bottom: 1rem;
    font-size: .97rem;
    border: 2px solid ${colors.shade};
    border-radius: 5px;
    outline: none;
`

export const Button = styled.button`
    padding: .7rem .3rem;
    font-size: 1.05rem;
    text-transform: uppercase;
    background: ${colors.sixth};
    color: ${colors.primary};
    border: none;
    border-radius: 5px;
`