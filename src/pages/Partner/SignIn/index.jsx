import React, {useState} from "react";
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
    Title
} from "./atoms";
import { DivImg,
    CcmImg
} from "../../../utils/Atoms";
import et1 from "../../../assets/driver/et1.webp"
import et2 from "../../../assets/driver/et2.webp"
import et3 from "../../../assets/driver/et3.webp"
import FormSignin from "../../../components/Partner/FormSignin";

function SignIn(){

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
                <ContainerSignup $cover>
                    <Title>
                        <h3>Devenez partenaire</h3>
                        <p>La plateforme vous offre la flexibilité, la visibilité et les données nécessaires pour vous mettre en relation avec davantage de clients. Devenez partenaire dès aujourd'hui.</p>
                    </Title>
                    <FormSignin />
                </ContainerSignup>
                <ContainerInfo>
                    <WhyUs>
                        <h4>Pourquoi nous ?</h4>
                    </WhyUs>
                    <SinginInfo $grid>
                        <InfoSignin>
                            <Div>
                                <Pinfo>Livrez vos commandes à votre façon</Pinfo>
                                <Pinfo $child2>Nos offres sont flexibles : vous pouvez ainsi les adapter à vos besoins. Rejoignez NOUS et faites livrer vos commandes par vos coursiers.</Pinfo>
                            </Div>
                        </InfoSignin>
                        <InfoSignin>
                            <Div>
                                <Pinfo>Augmentez votre visibilité</Pinfo>
                                <Pinfo $child2>Démarquez-vous grâce au marketing intégré à l'application pour atteindre davantage de clients et accroître vos ventes.</Pinfo>
                            </Div>
                        </InfoSignin>
                        <InfoSignin>
                            <Div>
                                <Pinfo>Établissez un lien avec vos clients</Pinfo>
                                <Pinfo $child2>Conservez vos clients sur le long terme en utilisant des données exploitables, en répondant aux commentaires ou en offrant un programme de fidélité.</Pinfo>
                            </Div>
                        </InfoSignin>
                    </SinginInfo>
                    <WhyUs $functioning>
                        <h4>Fonctionnement d'ENTREPRISE pour les commerces partenaires</h4>
                    </WhyUs>
                    <SinginInfo $grid>
                        <InfoSignin>
                            <DivImg $divFunctioning>
                                <CcmImg $functioningImg src={et1} alt="Première étape" />
                            </DivImg>
                            <Div>
                                <Pinfo>Les clients passent commande</Pinfo>
                                <Pinfo $child2>Le client trouve votre etablissement et passe commande sur l'ENTREPRISE.</Pinfo>
                            </Div>
                        </InfoSignin>
                        <InfoSignin>
                            <DivImg $divFunctioning>
                                <CcmImg $functioningImg src={et2} alt="Première étape" />
                            </DivImg>
                            <Div>
                                <Pinfo>Vous préparez</Pinfo>
                                <Pinfo $child2>Votre etablissement accepte et prépare la commande.</Pinfo>
                            </Div>
                        </InfoSignin>
                        <InfoSignin>
                            <DivImg $divFunctioning>
                                <CcmImg $functioningImg src={et3} alt="Première étape" />
                            </DivImg>
                            <Div>
                                <Pinfo>Les clients viennent ou vous livrer</Pinfo>
                                <Pinfo $child2>Les cliens viennent chercher leur commandes sur place ou bien vous les livrer chez eux.</Pinfo>
                            </Div>
                        </InfoSignin>
                    </SinginInfo>
                    <WhyUs $functioning>
                        <h4>Des questions ? Nous avons les réponses.</h4>
                    </WhyUs>
                    <SinginInfo $col>
                        <Accordion>
                            <CollapseContainer>
                                <Collapse onClick={() => {toggleCollapsed('question1')}}>
                                    <Pinfo $child2>
                                        Combien de temps faut-il pour devenir partenaire ?
                                    </Pinfo>
                                    <Down $up={isCollapsed.question1}className="ph-caret-down"></Down>
                                </Collapse>
                                <Content $show={isCollapsed.question1}>
                                    <Pinfo $child2>
                                        Le délai d'inscription dépend du nombre d'établissements que vous possédez. Il est possible de devenir restaurant partenaire Uber Eats et d'accepter vos premières commandes en quelques jours seulement ! Lancez-vous en vous inscrivant ici. Nous avons hâte d'avoir de vos nouvelles !
                                    </Pinfo>
                                </Content>
                            </CollapseContainer>
                            <CollapseContainer>
                                <Collapse onClick={() => {toggleCollapsed('question2')}}>
                                    <Pinfo $child2>
                                        Comment fonctionne la tarification ?
                                    </Pinfo>
                                    <Down $up={isCollapsed.question2}className="ph-caret-down"></Down>
                                </Collapse>
                                <Content $show={isCollapsed.question2}>
                                    <Pinfo $child2>
                                        La tarification ENTREPRISE présente deux composantes. Les frais d'activation, à régler une seule fois, incluent un kit de bienvenue, une tablette, un logiciel pour le restaurant et une séance photo avec un professionnel. Les frais de service correspondent à un pourcentage appliqué à chaque commande avec Uber Eats. Vous souhaitez en savoir plus ? Écrivez-nous à l'adresse restaurants@uber.com, et nous vous recontacterons.
                                    </Pinfo>
                                </Content>
                            </CollapseContainer>
                            <CollapseContainer>
                                <Collapse onClick={() => {toggleCollapsed('question3')}}>
                                    <Pinfo $child2>   
                                        De quels types d'outils ENTREPRISE les restaurants partenaires bénéficient-ils ?
                                    </Pinfo>
                                    <Down $up={isCollapsed.question3}className="ph-caret-down"></Down>
                                </Collapse>
                                <Content $show={isCollapsed.question3}>
                                    <Pinfo $child2>
                                        Une tablette dotée de l'application Commandes ENTREPRISE permet aux restaurants partenaires de suivre les nouvelles commandes et de gérer les livraisons au quotidien. Le logiciel Uber Eats Manager offre un meilleur accès aux menus, aux informations de paiement, aux données sur les ventes et aux statistiques sur les clients. Une équipe technique veille au bon fonctionnement quotidien de ces deux outils.
                                    </Pinfo>
                                </Content>
                            </CollapseContainer>
                        </Accordion>
                    </SinginInfo>
                </ContainerInfo>
            </Container>
        </>
    )
}
export default SignIn