import React from "react";
import {
    DivRace,
    RaceImg,
    InfoRace,
    DivButton,
    ButtonRaceFinish
} from "../../../utils/Atoms";
import Hybride from "../../../assets/hybride.webp";

function PendingRace(props) {
    return (
        <>
            <DivRace>
                <RaceImg src={Hybride} alt="hybrid car"/>
                <InfoRace>
                    <h4>{ props.driver.nom_commercial }</h4>
                    <h5>{ props.driver.nom }</h5>
                    <h5>{ props.race.total / 100 }€</h5>
                    <h5>{ props.race.start }</h5>
                    <h5>{ props.race.end }</h5>
                </InfoRace>
                <DivButton>
                    <ButtonRaceFinish>
                        Course terminer
                    </ButtonRaceFinish>
                </DivButton>
            </DivRace>
        </>
    )
}

export default PendingRace