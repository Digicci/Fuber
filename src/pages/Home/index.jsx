import React from "react";
import firstStep from "../../assets/firststep.webp";
import secondStep from "../../assets/secondstep.webp";
import thirdStep from "../../assets/thirdstep.webp";
import driver from "../../assets/driver.webp"
import { StyledLink } from "../../utils/Atoms";
import { useTranslation } from 'react-i18next';
import { 
  ContainerWrapper,
  RowWrapper,
  Form,
  DivInput,
  DivImg,
  DivText,
  Input,
  Button,
  CCM,
  CcmImg,
  ContainerStep,
  SpanStep,
  Ptext,
  Step
} from "./atoms"



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
            <Step>
              <DivImg>
                <CcmImg src={firstStep} alt="Première étape"/>
                <SpanStep>1</SpanStep>
              </DivImg>
              <DivText>
                <Ptext>{t('home.position')}</Ptext>
                <Ptext $child2>{t('home.position description')}</Ptext>
              </DivText>
            </Step>
            <Step>
              <DivImg>
                <CcmImg src={secondStep} alt="Second étape"/>
                <SpanStep>2</SpanStep>
              </DivImg>
              <DivText>
                <Ptext>{t('home.to select')}</Ptext>
                <Ptext $child2>{t('home.select description')}</Ptext>
              </DivText>
            </Step>
            <Step>
              <DivImg>
                <CcmImg src={thirdStep} alt="Troisème étape"/>
                <SpanStep>3</SpanStep>
              </DivImg>
              <DivText>
                <Ptext>{t('home.race')}</Ptext>
                <Ptext $child2>{t('home.race description')}</Ptext>
              </DivText>
            </Step>
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