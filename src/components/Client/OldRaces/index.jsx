import React, { useEffect, useState } from "react";
import {
    MyRaceH3,
    ContainerMyRaces,
    RaceInProgress,
    DivRace,
    RaceImg,
    InfoRace,
    DivButton,
    ButtonRaceFinish
} from "../../../utils/Atoms";
import Van from "../../../assets/van.webp";
import Hybride from "../../../assets/hybride.webp";
import Confort from "../../../assets/confort.webp";
import { useAxios } from "../../../utils/hook/useAxios";


function OldRaces(){

    const [oldRaces, setOldRaces] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const axios = useAxios()

    useEffect(() => {
        axios.get('race/getAllDone').then((res) => {
            setOldRaces(res.data)
            console.log(res.data)
            setIsLoading(false)
        }).catch((err) => {
            setError(err)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            <ContainerMyRaces>
                {isLoading ? (
                    <>Chargement...</>
                ) : (
                    <>
                        {oldRaces.length > 0 ? (
                            <>
                                <RaceInProgress>
                                    Courses en cours
                                </RaceInProgress>
                                {oldRaces.map((race, index) => {
                                    return (
                                        <>
                                            <DivRace key={index}>
                                                <RaceImg src={Confort} alt="hybrid car"/>
                                                <InfoRace>
                                                    <h4>{race.entreprise.vehicule.type} par {race.entreprise.prenom} {race.entreprise.nom.slice(0,1)}.</h4>
                                                    <h5>{race.entreprise.num}</h5>
                                                    <h5>{(race.total / 100).toFixed(2)}€</h5>
                                                    <h5>{race.start}</h5>
                                                    <h5>{race.end}</h5>
                                                    <h5>Date / heure</h5>
                                                </InfoRace>
                                                <DivButton>
                                                    <ButtonRaceFinish $noteRace>
                                                        Notez la course
                                                    </ButtonRaceFinish>
                                                </DivButton>
                                            </DivRace>
                                        </>
                                    )
                                })}
                            </>
                        ) : (
                            <MyRaceH3>
                                Il semble que vous n'avez pas de course en cours.
                            </MyRaceH3>
                        )}
                    </>
                )}
            </ContainerMyRaces>
        </>
    )
}
export default OldRaces