import styled from "styled-components";
import colors from "../../../colors";
import cover from "../../../assets/driver/shop.webp"

export const Container = styled.div`
    width: 100vw;
`
export const ContainerSignup = styled.div`
    width: 100%;
    height: 100%;
    padding: 8rem 3rem 10rem 0;
    display: flex;
    justify-content: end;
    ${(props) => 
        props.$cover &&
        `background: url(${cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        `
    }
`
export const WhyUs = styled.div`
    width: 100%;
    height: 100%;
    margin: 5rem 5rem;
    h4{
        font-size: 1.8rem;
        font-weight: 200;
    }
    @media (max-width:1024px){
        margin:0;
        h4{
        margin:0 0 2rem 2rem;
        }
    }
    ${(props) =>
        props.$functioning && 
        `h4{
            font-size: 1.98rem;
            font-weight: 500;
        }`
    }
`
export const ContainerInfo = styled.div`
    width: 100%;
    margin-bottom: 8rem;
`
export const Pinfo = styled.p`
    font-size: 1.2rem ;
    font-weight: 500;
    margin: 1rem 0;
    ${(props) =>
        props.$child2 &&
        `font-size: .98rem;
        font-weight: 300;
    `
  }
`
export const SinginInfo = styled.div`
  display:flex;
  justify-content: space-around;
  @media (max-width:1024px){
    justify-content: center;
    margin: 3rem;
  }
  @media (max-width:768px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
  ${(props) =>
    props.$col && 
    `flex-direction:column;
    align-items:center;
    width:100%;
    padding: 0 8rem;`
  }
`
export const Div = styled.div`
  width: 380px;
  text-align: start;
  margin-top: 1rem;
  padding: .5rem 2.5rem;
  display: block;
`
export const InfoSignin = styled.div`
    margin: 0;
`
export const CollapseContainer = styled.div`
    width:100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform-origin: bottom;
`
export const Collapse = styled.div`
    cursor: pointer;
    width:100%;
    transition: all 0.4s ease-in;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const Content = styled.div`
    max-height: 0;
    position: relative;
    bottom: 0;
    overflow: hidden;
    transition: all 0.5s ease-in;
    transform-origin: bottom;
    border-bottom: 1px solid ${colors.fifth};
    ${(props) => 
        props.$show && `
            max-height:250px;
        `
    }
`
export const Accordion =styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
`
export const Down = styled.i`
    position: relative;
    transition: all 0.2s ease-in;
    ${(props) =>
        props.$up &&
        `transform: rotate(180deg);`

    }
`