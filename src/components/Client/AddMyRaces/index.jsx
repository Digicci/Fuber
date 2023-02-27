import React, { useEffect, useState } from "react";
import {
    MyRaceH3,
    ContainerMyRaces,
    RaceInProgress,
} from "../../../utils/Atoms";
import { useRace } from "../../../utils/hook/Client/useRace";
import PendingRace from "../PendingRace";


function AddMyRace(){

    const raceHook = useRace()
    const [races, setRaces] = useState([])

    useEffect(() => {
        raceHook.getAllPending().then((res) => {
            setRaces(res.data)
        })
    }, [])

    return(
        <>
            <ContainerMyRaces>

                {
                    races.length > 0 ? (
                        <>
                            <RaceInProgress>
                                Courses en cours
                            </RaceInProgress>
                            {
                                races.map((race) => {
                                    return <PendingRace {...race} />
                                })
                            }
                        </>
                    ) : (
                        <MyRaceH3>
                            Il semble que vous n'avez pas de course en cours.
                        </MyRaceH3>
                    )
                }
            </ContainerMyRaces>
        </>
    )
}
export default AddMyRace