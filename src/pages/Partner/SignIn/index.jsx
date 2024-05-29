import React, {useEffect, useState} from "react";
import {
    Container,
    ContainerSignup,
    WhyUs,
    ContainerInfo,
    Pinfo,
    SinginInfo,
    Div,
    InfoSignin,
    Collapse,
    CollapseContainer,
    Content,
    Accordion,
    Down,
    Title,
    Cover,
    Button,
    DivInfo,
    Form,
    DivForm,
    ContainerAccordion,
    ContactUs,
    Banner,
    BannerLeft,
    BannerRight
} from './atoms'

import FormSignin from "../../../components/Partner/FormSignin";
import Footer from '../../../components/Footer'
import {useSelector} from "react-redux";
import {getAuth} from "../../../utils/store/Partner/selectors/AuthSelectors";
import {useNavigate} from "react-router-dom";

function SignIn(){

    const auth = useSelector(getAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if(auth.auth) {
            navigate('/partner/account/home', { replace: true })
        }
    }, [auth.auth])

    const [isCollapsed, setIsCollapsed] = useState({
        question1: false,
        question2: false,
        question3: false,
    });
    const toggleCollapsed = (field) => {
        const statu = isCollapsed[field]
        const state = {
            question1: false,
            question2: false,
            question3: false,
        }
        state[field] = !statu
        setIsCollapsed(state)
        

    }
    return(
        <>
            <Container>
                <ContainerSignup>
                    <Title>
                        <h2>Devenez partenaire</h2>
                        <p>La plateforme dedié 100% au taxis vous offre la flexibilité, la visibilité et les données nécessaires pour vous mettre en relation avec davantage de clients. Devenez partenaire dès aujourd'hui.</p>
                    </Title>
                </ContainerSignup>
                <Cover>
                    <div></div>
                    <Button>Démarrer l'expérience</Button>
                </Cover>
                <Form>
                    <DivInfo>
                        <h3> C'est facile de se lancer</h3>
                        <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga nisi, repellendus sed odio cupiditate.</p>
                        <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga nisi, repellendus sed odio cupiditate.</p>
                        <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga nisi, repellendus sed odio cupiditate.</p>
                    </DivInfo>
                    <DivForm>
                        <FormSignin/>
                    </DivForm>
                </Form>
                <ContainerInfo>

                    <WhyUs $functioning>
                        <h4>Comment ça marche ?</h4>
                    </WhyUs>

                    <SinginInfo $grid>
                        <InfoSignin>


                            <Div>
                                <Pinfo>Lorem ipsum</Pinfo>
                                <Pinfo $child2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Pinfo>
                            </Div>
                        </InfoSignin>

                        <InfoSignin>


                            <Div>
                                <Pinfo>Lorem ipsum</Pinfo>
                                <Pinfo $child2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Pinfo>
                            </Div>
                        </InfoSignin>

                        <InfoSignin>
                            <Div>
                                <Pinfo>Lorem Ipsum</Pinfo>
                                <Pinfo $child2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Pinfo>
                            </Div>
                        </InfoSignin>
                    </SinginInfo>
                </ContainerInfo>
                <ContainerAccordion>
                    <WhyUs $functioning $advantage>
                        <h4>Des questions ? Nous avons les réponses.</h4>
                    </WhyUs>

                    <SinginInfo $col>
                        <Accordion>
                            <CollapseContainer>
                                <Collapse onClick={() => {toggleCollapsed('question1')}}>
                                    <Pinfo $child2>
                                        Lorem ipsum
                                    </Pinfo>
                                    <Down $up={isCollapsed.question1}className="ph-caret-down"></Down>
                                </Collapse>
                                <Content $show={isCollapsed.question1}>
                                    <Pinfo $child2>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </Pinfo>
                                </Content>
                            </CollapseContainer>

                            <CollapseContainer>
                                <Collapse onClick={() => {toggleCollapsed('question2')}}>
                                    <Pinfo $child2>
                                        Lorem ipsum
                                    </Pinfo>
                                    <Down $up={isCollapsed.question2}className="ph-caret-down"></Down>
                                </Collapse>
                                <Content $show={isCollapsed.question2}>
                                    <Pinfo $child2>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </Pinfo>
                                </Content>
                            </CollapseContainer>
                            
                            <CollapseContainer>
                                <Collapse onClick={() => {toggleCollapsed('question3')}}>
                                    <Pinfo $child2>
                                        Lorem ipsum
                                    </Pinfo>
                                    <Down $up={isCollapsed.question3}className="ph-caret-down"></Down>
                                </Collapse>
                                <Content $show={isCollapsed.question3}>
                                    <Pinfo $child2>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </Pinfo>
                                </Content>
                            </CollapseContainer>
                        </Accordion>
                    </SinginInfo>
                </ContainerAccordion>
                <ContactUs>
                    <Banner>
                        <BannerLeft/>
                        <BannerRight>
                            <h4>Vous avez encore des questions ?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <Button $padding>Contactez-nous</Button>
                        </BannerRight>
                    </Banner>
                </ContactUs>
                <Footer/>
            </Container>
        </>
    )
}
export default SignIn