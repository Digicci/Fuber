import React, {useEffect, useState} from "react";
import {
    Container,
    H3,
    InProgress,
    DivRace,
    Info,
} from "./atoms";
import RaceStatusInfo from "../RaceStatusInfo";
import {useDispatch, useSelector} from 'react-redux'
import {
    getAuthUser,
    getSelectedDriverId,
    getSelectedEmployee
} from '../../../utils/store/Partner/selectors/AuthSelectors'



function RaceByStatus({status}){
    
    const dispatch = useDispatch()
    
    // FIXME : Ce component copie les course à chaque fois que l'on change
    //  de type de courses (pending / done)
    //  de plus les courses apparaissent en pending et en done peut importe leur statut reel.
    
    const selectedDriverId = useSelector(getSelectedDriverId)
    const drivers = useSelector(getSelectedEmployee)
    const driver = useSelector(getAuthUser)
    const copyDriver = {...driver}
    let copyDrivers = [...drivers]
    const [races, setRaces] = useState([])
    const [loadRace, setLoadRace] = useState(false)
    
    
    const assignDriverToRaces = () => {
        copyDrivers.length > 0 && copyDrivers.forEach(driver => {
            driver.courses.length > 0 && driver.courses.forEach(course => {
                if (course.driver === undefined) {
                    course.driver = driver
                }
            })
        })
    }
    
    const accumulRaces = () => {
        setRaces([])
        if (copyDrivers.length > 0) {
            let races = copyDrivers.reduce((acc, driver) => {
                return acc.concat(driver.courses)
            })
            setRaces(races)
        }
    }
    
    const addConnectedDriverRaces = () => {
        if (copyDriver.courses?.length > 0) {
            console.log('driver races add')
            const raceTab = []
            copyDriver.courses?.forEach(course => {
                const c = {...course}
                c.driver = driver
                raceTab.push(c)
            })
            setRaces(races.concat(raceTab))
        }
        console.log(races)
    }
    
    useEffect(() => {
        setLoadRace(false)
        setRaces([])
        return ( ) => {
            setRaces([])
        }
    }, [driver, drivers]);
    
    useEffect(() => {
        if (races.length === 0 && !loadRace) {
            setLoadRace(true)
            assignDriverToRaces()
            accumulRaces()
            addConnectedDriverRaces()
        }
    }, [races]);
    
    return(
        <>
            <Container>
                {
                    races.filter(race => race.state === status).length === 0 &&
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
                        return race.state === status && (selectedDriverId === 0 || selectedDriverId === race.driver.id) ? <RaceStatusInfo key={race?.id} {...race} /> : null
                    })
                }
            </Container>
        </>
    )
}

export default RaceByStatus