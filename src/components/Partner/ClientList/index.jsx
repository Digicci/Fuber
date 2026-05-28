import React, {useState} from "react";
import  {
    DivClient,
    Div,
}  from "./atoms";
import ClientLists from "../ClientLists";
import { useSelector} from 'react-redux'
import { getSelectedEmployee} from '../../../utils/store/Partner/selectors/AuthSelectors'
import { getPeriodDates } from '../../../utils/Data/Partner/getPeriodDates'


function ClientList({period}) {

    const drivers = useSelector(getSelectedEmployee)
    const races = drivers.reduce((acc, driver) => {
        const coursesWithDriver = driver.courses.map((course) => ({
            ...course,
            driver,
        }));

        return acc.concat(coursesWithDriver);
    }, []);

    const { start, end } = getPeriodDates(period);

    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();

    const filteredRaces =
      period === "all"
        ? races
        : races.filter((race) => {
            const dateValue =
              race.createdAt ||
              race.updatedAt ||
              race.date ||
              race.created_at;

            if (!dateValue) return false;

            const raceTime = new Date(dateValue).getTime();

            return raceTime >= startTime && raceTime <= endTime;
        });

    return (
        <>
        <DivClient>
            <Div>
            <p>Nom</p>
            <p>Date</p>
            <p>Prix</p>
            </Div>
            {
                filteredRaces.map((race) => {
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