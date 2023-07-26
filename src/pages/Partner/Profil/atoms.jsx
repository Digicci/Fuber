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
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 10px;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2.5rem 0;
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

export const Connexion = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    label{
        display: inline-block;
        width: 70px;
        position: relative;
        height: 40px;
        cursor: pointer;
        overflow: hidden;
    }
    input{
        position: absolute;
        top: -30px;
        left: -30px;
        width: 0;
        height: 0;
    }
    input + span{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${colors.fifth};
        border-radius: 20px;
    }
    input:checked + span{
        background-color: ${colors.sixth};
    }
    
    input + span:before{
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 4px;
        width: 32px;
        height: 32px;
        background-color: ${colors.primary};
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all .5s;
    }
    input:checked + span:before{
        left: 34px;
    }
    .txtoff, .txton{
        font-size: .9rem;
        margin-left: .5rem;
    }
    .txtoff{
        color: ${colors.red};
        display: block;
    }
    .txton{
        display: block;
        color: ${colors.sixth};
    }

`