import React, {useState} from "react";
import  {
    DivClient,
    Div,
}  from "./atoms";
import ClientLists from "../ClientLists";
import { useSelector} from 'react-redux'
import { getSelectedEmployee} from '../../../utils/store/Partner/selectors/AuthSelectors'


function ClientList() {

    const drivers = useSelector(getSelectedEmployee)
    const copyDrivers = [...drivers]
    copyDrivers.forEach((driver) => {
        return driver.courses.map((course) => {
            return course.driver = driver
        })
    })
    const races = copyDrivers.reduce((acc, driver) => {
        return  acc.concat(driver.courses)
    }, [])

    return (
        <>
        <DivClient>
            <Div>
            <p>Nom</p>
            <p>Date</p>
            <p>Prix</p>
            </Div>
            {
                races.map((race) => {
                    return (
                        <ClientLists key={race.id} {...race} />
                    )
                }
                )
            }
        </DivClient>
        </>
    )
}

export default ClientList;