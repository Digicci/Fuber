import React, {useState, useEffect} from "react";
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
import Hybride from "../../../assets/hybride.webp"
import confort from "../../../assets/confort.webp"
import van from "../../../assets/van.webp"
import {useAxios} from "../../../utils/hook/useAxios";


function AddMyRace() {

    const axios = useAxios()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('race/getAllPending').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

    return (
        <>
            <ContainerMyRaces>
                {data.length < 0 ? (
                    <MyRaceH3>
                        Il semble que vous n'avez pas de course en cours.
                    </MyRaceH3>
                ) : (
                    <>
                        <RaceInProgress>
                            Courses en cours
                        </RaceInProgress>
                        {
                            data.map((race) => {
                                const dateObj = new Date(race.createdAt)
                                const date = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear()
                                const time = dateObj.getHours() + ":" + dateObj.getMinutes()
                                const entreprise = race.entreprise
                                const car = entreprise.vehicule
                                const img = car.img_path
                                const src = img === "confort" ? confort : img === "hybride" ? Hybride : van
                                return (
                                    <DivRace>
                                        <RaceImg src={src} alt="car img"/>
                                        <InfoRace>
                                            <h4>{car.type.toUpperCase()} par {entreprise.prenom}</h4>
                                            <h5>{entreprise.num}</h5>
                                            <h5>{(race.total / 100).toFixed(2)}€</h5>
                                            <h5>Départ : {race.start}</h5>
                                            <h5>Arrivée : {race.end}</h5>
                                            <h5>{`${date} à ${time}`}</h5>
                                        </InfoRace>
                                        <DivButton>
                                            <ButtonRaceFinish>
                                                {race.validNumber}
                                            </ButtonRaceFinish>
                                        </DivButton>
                                    </DivRace>
                                )
                            })
                        }
                    </>
                )
                }


            </ContainerMyRaces>
        </>
    )
}

export default AddMyRace