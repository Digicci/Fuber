import styled from 'styled-components'
import colors from '../../../colors'

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
export const Container = styled.div`
    display: flex;
    width: 100%;
`