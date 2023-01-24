import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import corverHome from "../../assets/coverhome.webp";
import firstStep from "../../assets/firststep.webp";
import secondStep from "../../assets/secondstep.webp";
import thirdStep from "../../assets/thirdstep.webp";
import driver from "../../assets/driver.webp"
import { StyledLink } from "../../utils/Atoms";
import { useTranslation } from 'react-i18next';

const ContainerWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 8rem;
  ${(props) =>
    props.$cover &&
    `height: 100vh;
    background: url(${corverHome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    `
  }
`
const RowWrapper = styled.div`
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
const Form = styled.form`
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
const DivInput = styled.div`
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


const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding: .2rem .1rem;
  background: transparent;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: .6rem 2rem;
  outline: none;
  border: none;
  border-radius: 8px;
  background: ${colors.secondary};
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
const CCM = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10rem;
  h4{
    font-size: 1.8rem;
    font-weight: 200;
  }
  ${(props) =>
    props.$border &&
    `border: solid ${colors.fourth} 2px;
     width: 85%;
     margin-top: 2rem;
     `
  }
`
const DivImg = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  position: relative;
  transform: scale(0.8);
  ${(props) =>
    props.$divDriver &&
    `width: 550px;
    margin-top: 0;
    `
  }
`
const SpanStep = styled.div`
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
const CcmImg = styled.img`
  width: 250px;
  ${(props) => 
    props.$driverImg &&
    `width: 550px;
    `
  }
`
const DivText = styled.div`
  width: 250px;
  height: 80px;
  text-align: center;
  margin-top: 1rem;
  padding: 0 1rem;
  display: block;
  ${(props) =>
    props.$textDriver &&
   `width: 660px;
    text-align: start;
    `
  }
  h5{
    text-align: start;
    font-size: 1.5rem;
    height: 60px;
    margin-bottom: 1rem;
    font-weight: 100;
  }
  .partenaire{
    margin-top: 5rem;
    height:30px;
  }
`
const Ptext = styled.p`
  font-size: 1rem ;
  font-weight: 600;
  ${(props) =>
    props.$child2 &&
    `font-size: .8rem;
    padding: .2rem 1.5rem;
    `
  }
  ${(props) => 
    props.$pDriver &&
    `font-weight: 300;
    margin-bottom: 1.5rem;`
  }
`
const ContainerStep = styled.div`
  display:flex;
  justify-content: space-evenly;
`

function Home() {
  const {t, i18n} = useTranslation('translation', {keyPrefix: ''});
  return(
    <>
      <ContainerWrapper $cover>
        <RowWrapper $direction>
          <h2>
            {t('home.welcome')}
          </h2>
          <Form>
            <DivInput>
              <Input type="text" placeholder={t('home.premises')}></Input>
            </DivInput>
            <DivInput>
              <Input type="text" placeholder={t('home.destination')}></Input>
            </DivInput>
            <Button type="submit">
              <i className="ph-magnifying-glass"></i>
            </Button>
          </Form>
        </RowWrapper>
      </ContainerWrapper>
      <ContainerWrapper>
        <CCM>
          <h4>{t('home.how it works')}</h4>
        </CCM>
        <CCM>
          <ContainerStep>
            <div style={{marginRight:'15rem'}}>
              <DivImg>
                <CcmImg src={firstStep} alt="Première étape"/>
                <SpanStep>1</SpanStep>
              </DivImg>
              <DivText>
                <Ptext>{t('home.position')}</Ptext>
                <Ptext $child2>{t('home.position description')}</Ptext>
              </DivText>
            </div>
            <div style={{marginRight:'15rem'}}>
              <DivImg>
                <CcmImg src={secondStep} alt="Second étape"/>
                <SpanStep>2</SpanStep>
              </DivImg>
              <DivText>
                <Ptext>{t('home.to select')}</Ptext>
                <Ptext $child2>{t('home.select description')}</Ptext>
              </DivText>
            </div>
            <div style={{marginRight:'15rem'}}>
              <DivImg>
                <CcmImg src={thirdStep} alt="Troisème étape"/>
                <SpanStep>3</SpanStep>
              </DivImg>
              <DivText>
                <Ptext>{t('home.race')}</Ptext>
                <Ptext $child2>{t('home.race description')}</Ptext>
              </DivText>
            </div>
          </ContainerStep>
        </CCM>
      </ContainerWrapper>
      <ContainerWrapper>
        <CCM>
          <h4>{t('home.visibility')}</h4>
        </CCM>
        <CCM $border>
          <ContainerStep>
            <DivImg $divDriver>
              <CcmImg $driverImg src={driver} alt="Driver"/>
            </DivImg>
            <DivText $textDriver>
              <h5>{t('home.signup driver')}</h5>
              <Ptext $pDriver>{t('home.signup driver description')}</Ptext>
              <StyledLink to="/">
                <Button $buttonDriver>{t('home.signup to driver')}</Button>
              </StyledLink>
              <h5 className="partenaire">{t('home.partner')}</h5>
              <Ptext $pDriver>{t('home.partner description')}</Ptext>
              <StyledLink to="/">
                <Button $connecterDriver>{t('home.login partner')}</Button>
              </StyledLink>
            </DivText>
          </ContainerStep>
        </CCM>
      </ContainerWrapper>
    </>
  )
}

export default Home