import styled from "styled-components";
import colors from "../../../colors";
import coverHome from "../../../assets/coverhome.webp";



export const ContainerWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 8rem;
  ${(props) =>
    props.$cover &&
    `width:auto;
    height: 100vh;
    background: url(${coverHome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    `
  }
`
export const RowWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
  h2{
    font-size: 3.5rem;
    font-weight: 300;
    margin:0 0 2rem 2rem;
    @media (max-width:768px) {
      font-size: 2.5rem;
      font-weight: 150;
      margin-bottom: 2rem;
    }
  }
  ${(props) =>
    props.$direction &&
    `flex-direction: column
    `
  }
`
export const Form = styled.form`
  display: flex;
  min-width: 320px ;
  width: 80%;
  max-width: 700px;
  margin-left: 2rem;
  @media (max-width: 768px){
    flex-direction: column;
    width: 50%;
    justify-content: center;
    margin: 0;
  }
`
export const DivInput = styled.div`
  width: 100%;
  align-items: center;
  background: ${colors.primary};
  font-size: .9rem;
  margin: 0 .5rem;
  padding: .6rem .5rem;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%), 0 4px 4px rgb(0 0 0 / 4%);
  @media (max-width: 768px){
    margin: .5rem;
  }
`
export const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding: .2rem .1rem;
  background: transparent;
`
 export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: .6rem 2rem;
  outline: none;
  border: none;
  border-radius: 8px;
  background: ${colors.sixth};
  @media (max-width: 768px){
    margin: .5rem;
    width: 100%;
  }
  i {
    color: ${colors.primary};
    font-size: 1.4rem;
  }
  ${(props) =>
    props.$buttonDriver &&
    `margin: 0 .5rem;
        width: 150px;
        border-radius: 5px;
        color: ${colors.primary};
        font-size: 1.2rem;
        `
  }
  ${(props) =>
    props.$connecterDriver &&
    `margin: 0 .2rem;
        width: 200px;
        border-radius: 5px;
        color: ${colors.primary};
        font-size: 1.2rem;
        background: #94C9A6
    `
  }
`
export const CCM = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10rem;
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
    props.$border &&
    `border: solid ${colors.fourth} 2px;
     width: 85%;
     margin-top: auto;
     `
  }
  ${(props) =>
    props.$border &&
    `@media (max-width:1024px){
      margin: auto;
    }
     `
  }
`
export const SpanStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 1.3rem;
  border: 3px solid ${colors.primary};
  border-radius: 50%;
  width: 50px;
  background: ${colors.secondary};
  margin-top: 100px;
  aspect-ratio: 1/1;
  margin-left: -30px;
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${colors.primary};
  text-align: center;
`

