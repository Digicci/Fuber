import React, { useEffect, useState } from "react";
import {
    MyRaceH3,
    ContainerMyRaces,
    RaceInProgress,
    DivRace,
    RaceImg,
    InfoRace,
    DivButton,
    ButtonRaceFinish,
    Loader
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
                    <><Loader/></>
                ) : (
                    <>
                        {oldRaces.length > 0 ? (
                            <>
                                <RaceInProgress>
                                    Courses en cours
                                </RaceInProgress>
                                {oldRaces.map((race, index) => {
                                    const dateObj = new Date(race.createdAt)
                                    const date = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear()
                                    const time = dateObj.getHours() + ":" + dateObj.getMinutes()
                                    const nom = race.entreprise.nom.slice(0,1)
                                    const prenom = race.entreprise.prenom
                                    const type = race.entreprise.vehicule.type.toUpperCase()
                                    const total = (race.total / 100).toFixed(2)
                                    return (
                                        <>
                                            <DivRace key={index}>
                                                <RaceImg src={Confort} alt="hybrid car"/>
                                                <InfoRace>
                                                    <h4>{type} par {prenom} {nom}.</h4>
                                                    <h5>{race.entreprise.num}</h5>
                                                    <h5>{total}€</h5>
                                                    <h5>{race.start}</h5>
                                                    <h5>{race.end}</h5>
                                                    <h5>{date} à {time}</h5>
                                                </InfoRace>
                                                {/*
                                                //A rajouter lors de la V2 du projet
                                                <DivButton>
                                                    <ButtonRaceFinish $noteRace>
                                                        Notez la course
                                                    </ButtonRaceFinish>
                                                </DivButton>
                                                */}
                                            </DivRace>
                                        </>
                                    )
                                })}
                            </>
                        ) : (
                            <MyRaceH3>
                                Il semble que vous n'avez pas de course archivée.
                            </MyRaceH3>
                        )}
                    </>
                )}
            </ContainerMyRaces>
        </>
    )
}
export default OldRaces