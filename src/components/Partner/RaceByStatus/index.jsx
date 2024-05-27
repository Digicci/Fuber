import React, {useEffect, useState} from "react";
import {
    Container,
    H3,
    InProgress,
    DivRace,
    Info,
} from "./atoms";
import RaceStatusInfo from "../RaceStatusInfo";
import { useSelector} from 'react-redux'
import {
    getAuthUser,
    getSelectedDriverId,
    getSelectedEmployee
} from '../../../utils/store/Partner/selectors/AuthSelectors'



function RaceByStatus({status}){
    
    // FIXME : Ce component copie les course à chaque fois que l'on change
    //  de type de courses (pending / done)
    //  de plus les courses apparaissent en pending et en done peut importe leur statut reel.
    
    const drivers = useSelector(getSelectedEmployee)
    const driver = useSelector(getAuthUser)
    let copyDrivers = [...drivers]
    const [races, setRaces] = useState([])
    
    const assignDriverToRaces = () => {
        copyDrivers.length > 0 && copyDrivers.forEach(driver => {
            driver.courses.length > 0 && driver.courses.forEach(course => {
                course.driver = driver
            })
        })
    }
    
    const accumulRaces = () => {
        setRaces([])
        if (copyDrivers.length > 0) {
            let races = copyDrivers.reduce((acc, driver) => {
                return acc.concat(driver.courses.filter(course => course.state === status))
            })
            setRaces(races)
        }
    }
    
    const addConnectedDriverRaces = () => {
        if (driver.courses?.length > 0) {
            console.log('driver races add')
            driver.courses.forEach(course => course.driver = driver)
            setRaces(races.concat(driver.courses.filter(course => course.state === status)))
            console.log(races, driver.courses)
        }
    }
    
    useEffect(() => {
        setRaces([])
        assignDriverToRaces()
        accumulRaces()
        addConnectedDriverRaces()
    }, [status]);
    
    return(
        <>
            <Container>
                {
                    races?.length === 0 &&
                  <H3>
                      Il semble que vous n'avez pas encore{status === 'done' ? ' effectué de course.' : ' de courses en cours'}
                  </H3>
                }
                <InProgress>
                    {status === 'done' ? 'Anciennes courses' : 'Courses en cours'}
                </InProgress>
                {
                    races?.length > 0 &&
                    races?.map((race)=> {
                        console.log(race)
                        return <RaceStatusInfo key={race?.id} {...race} />
                    })
                }
            </Container>
        </>
    )
}

export default RaceByStatus