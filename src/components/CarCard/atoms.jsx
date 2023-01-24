import styled from "styled-components";
import colors from "../../colors";


export const CarType = styled.div`
    border-radius: 5px;
    padding: .5rem .3rem;
    margin: 0.5rem 0;
    display: flex;
    cursor: pointer;
    height: 60%;
    ${(props) =>
        props.$active &&
        `border: 1px solid ${colors.sixth}`
    }
`
export const CarImg = styled.img`
    width: 25%;
    display: flex;
    aspect-ratio: 1/1;
    @media (max-width:768px){
        width: 15%;
    }
    @media (max-width:425px){
        width: 25%;
    }
`

export const InfoCar = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 0 .5rem;
    h5{
        margin: 0 1rem 0 0;
        font-size: 1.25rem;
        font-weight: 550;
    }
    span{
        margin: 0 0 1rem 0;
        display: flex;
        align-items: center;
    }
    i{
        font-size: 1.15rem;
    }
    p{
        font-size: .8rem;
        margin: 0 0 1rem 0;
    }
`
export const Price = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-size: 1.15rem;
        font-weight: 600;
    }
`