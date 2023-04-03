import React from "react";
import {
    Container,
    H3,
    InProgress,
    DivRace,
    Info,
    DivButton,
    ButtonFinish,
} from "./atoms";

function CurrentRace(){
    return(
        <>
            <Container>
                <H3>
                    Il semble que vous n'avez pas de course en cours.
                </H3>
                <InProgress>
                    Courses en cours
                </InProgress>
                <DivRace>
                    <Info>
                        <h4>Comfort Hybride par Prenom N.</h4>
                        <h5>Prenom N. client</h5>
                        <h5>13.40€</h5>
                        <h5>Adresse départ</h5>
                        <h5>Adresse arrivé</h5>
                        <h5>Date / heure</h5>
                    </Info>
                    <DivButton>
                        <ButtonFinish>
                            Course terminer
                        </ButtonFinish>
                    </DivButton>
                </DivRace>
            </Container>
        </>
    )
}

export default CurrentRace
