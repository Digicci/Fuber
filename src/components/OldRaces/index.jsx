import React from "react";
import {
    MyRaceH3,
    ContainerMyRaces,
    RaceInProgress,
    DivRace,
    RaceImg,
    InfoRace,
    DivButton,
    ButtonRaceFinish
} from "../../utils/Atoms";
import Van from "../../assets/van.webp";
import Hybride from "../../assets/hybride.webp";
import Confort from "../../assets/confort.webp";


function OldRaces(){

    return(
        <>
            <ContainerMyRaces>
                <MyRaceH3>
                    Il semble que vous n'avez pas de course en cours.
                </MyRaceH3>
                <RaceInProgress>
                    Courses en cours
                </RaceInProgress>
                <DivRace>
                    <RaceImg src={Confort} alt="hybrid car"/>
                    <InfoRace>
                        <h4>Comfort Hybride par Prenom N.</h4>
                        <h5>Numero du chauffeur</h5>
                        <h5>13.40€</h5>
                        <h5>Adresse départ</h5>
                        <h5>Adresse arrivé</h5>
                        <h5>Date / heure</h5>
                    </InfoRace>
                    <DivButton>
                        <ButtonRaceFinish $noteRace>
                            Notez la course
                        </ButtonRaceFinish>
                    </DivButton>
                </DivRace>
            </ContainerMyRaces>
        </>
    )
}
export default OldRaces