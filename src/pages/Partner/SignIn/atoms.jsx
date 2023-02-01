import styled from "styled-components";
import colors from "../../../colors";
import cover from "../../../assets/driver/shop.webp"

export const Container = styled.div`
    width: 100%;
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
    @media (max-width:425px){
        padding:2rem;
        flex-direction: column;
    }
`
export const WhyUs = styled.div`
    width: 80%;
    height: 100%;
    margin: 5rem 3rem;
    h4{
        font-size: 1.8rem;
        font-weight: 200;
    }
    @media (max-width:1031px){
        h4{
        margin:0 0 2rem 2rem;
        }
    }
    @media (max-width:768px){
        h4{
        margin:0 0 2rem 2rem;
        }
    }
    ${(props) =>
        props.$functioning && 
        `
        h4{
            font-size: 1.98rem;
            font-weight: 500;
        }
        @media (max-width:1031px){
            h4{
            margin:2rem 0 2rem 3rem;
            }
        }
        @media (max-width:768px){
            h4{
            margin:2rem 0;
            }
        }
        `
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
@media (max-width:1031px){
justify-content: center;
margin: 3rem;
}
@media (min-width:1044px){
    justify-content: space-around;
}
${(props) =>
    props.$grid && `
    @media (max-width:768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: auto;
    margin: 0;
    align-items: center;
    }
    @media (min-width:1031px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: auto;
    margin: 0;
    align-items: center;
    }
    @media (max-width:425px) {
    flex-direction: column;
    display:block;
}
`
}
${(props) =>
props.$col && 
    `flex-direction:column;
    align-items:center;
    width:auto;
    padding: 0 8rem;
    @media (max-width:768px){
        margin:0;
        padding:0 4rem
    }
    @media (max-width:425px){
    padding: 0 2rem;
    }`
}
`
export const Div = styled.div`
  width: 100%;
  text-align: start;
  margin-bottom: 3rem;
  padding: .5rem 2.5rem;
  display: block;
  @media (max-width:768px){
    padding: 0 1.5rem;
  }
`
export const InfoSignin = styled.div`
    margin: 0;
    @media (max-width:1031px){
        width: auto;
        justify-content: space-between;
    }
    @media (max-width:768px){
        width: 100%;
    }
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
export const Title = styled.div`
    color: ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    width: 40%;
    margin-right: 4rem;
    h3{
        font-size: 3.1rem;
        font-weight: 560;
        letter-spacing: 2px;
        line-height: 50px;
    }
    p{
        font-size: .95rem;
        font-weight: 300;
        margin: 2rem 0;
    }
    @media (max-width:425px){
        width: auto;
        margin: 0;
        padding: 0;
    }
    @media (max-width:768px){

    }
`