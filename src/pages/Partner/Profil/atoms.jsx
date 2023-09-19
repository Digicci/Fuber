import styled from 'styled-components'
import colors from '../../../colors'

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const AvatarIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-shadow: 1px 2px 4px 2px ${colors.shade};
    margin: 1rem 0 0 .5rem;
`

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 10px;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 2.5rem 0 0 1.5rem;
    ${(props) => props.$vehicule && (
    `
        width: 50%;
    `
    )}
    @media (max-width:768px){
        width: 70%;
        padding-top: 1rem;
      ${(props) => props.$vehicule && (
      `
          width: 70%;
      `
      )}
    }
    @media (min-width:1204px){
        ${(props) => props.$vehicule && (
        `
            width: 40%;
        `
        )}
    }
    @media(min-width:1440px){
        ${(props) => props.$vehicule && (
        `
            width: 50%;
        `
        )}
    }
`

export const InputUpdate = styled.input`
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  border : 1px solid #e0dfdd;
  border-radius: 5px;
  padding: .4rem .6rem;
  margin: .5rem;
  @media (max-width:425px){
        width: 40%;
    }
    @media (min-width:758px){
        width: 25%;
    }
    @media (min-width:1024px){
        width: 40%;
    }
`

export const Label = styled.p`
    margin-top: 1rem;
    font-size: 1.05rem;
    font-weight: 600;
`

export const Number = styled.p`
    font-size: 1.15rem;
    margin: 1rem 0 1rem;
`

export const ProfileLogout = styled.button`
    background: ${colors.fourth};
    color: ${colors.red};
    padding: .5rem 1.3rem;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
    width:fit-content;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 400;
`

export const TitlePage = styled.h2`
    font-size: 1.65rem;
    font-weight:600;
    display: flex;
    border-bottom: 1px solid ${colors.sixth};
    padding-bottom: .3rem;
`

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
export const DivOnline = styled.div`
    display: flex;
    width: 100%;
    margin: 2rem 0 2rem 0;
`
export const EntrepriseName = styled.p`
  font-size: 1.15rem;
  margin: 1rem 0 1rem;
`
export const EntrepriseSiret = styled.p`
  font-size: 1.15rem;
  margin: 1rem 0 1rem;
`

export const Button = styled.button`
    padding: .7rem .3rem;
    font-size: 1.05rem;
    background: ${colors.sixth};
    color: ${colors.primary};
    border-radius: 10px;
    border: none;
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    @media (max-width:768px){
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        border: none;
    }
    ul{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      align-items: center;
      text-align: center;
      justify-content: space-evenly;
      width: 100%;
      padding: 0 0 1rem 0;
      margin: 0 0 1rem 0;
      border-bottom: 1px solid ${colors.seventh};
    }
    
    li{
      list-style: none;
    }
`