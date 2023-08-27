import React from "react";
import {
    Container,
    H3,
    InProgress,
    DivRace,
    Info,
} from "./atoms";
import RaceStatusInfo from "../RaceStatusInfo";
import { useSelector} from 'react-redux'
import { getSelectedEmployee} from '../../../utils/store/Partner/selectors/AuthSelectors'


function RaceByStatus({status}){
    const drivers = useSelector(getSelectedEmployee)
    const copyDrivers = [...drivers]
    copyDrivers.map((driver) => {
        return driver.courses.map((course) => {
            return course.driver = driver
        })
    })
    const races = copyDrivers.reduce((acc, driver) => {
        return  acc.concat(driver.courses.filter( (course) =>{
            console.log(acc)
            return course.state === status
        }))
    }, [])


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
                    races.map((race)=> {
                        return <RaceStatusInfo key={race.id} {...race} />
                    })
                }
            </Container>
        </>
    )
}

export default RaceByStatus