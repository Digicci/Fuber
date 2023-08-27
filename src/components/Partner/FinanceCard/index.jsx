import React from "react";
import {
    Div,
} from "./atoms";
import FinanceCards from "../FinanceCards";
import {useSelector} from 'react-redux'
import {getNbDriver, getSelectedEmployee} from '../../../utils/store/Partner/selectors/AuthSelectors'

function FinanceCard() {

    const drivers = useSelector(getSelectedEmployee)
    console.log(drivers)
    const nbDriver = useSelector(getNbDriver)
    const nbCourse = drivers.reduce((acc, driver) => acc + driver.courses.length, 0)
    const totalRevenu = drivers.reduce((acc, driver) => acc + driver.courses.reduce((ac, course) => ac + course.driverPrice, 0), 0);
    const totalClient = drivers.reduce((acc, driver) => acc + driver.courses.reduce(
        (ac, course) => {
            !ac.includes(course.utilisateurId) && ac.push(course.utilisateurId)
            return ac
        }, []).length, 0)


    const cards = [
        {
            id: 1,
            title: "Total des courses",
            info: nbCourse,
            icon: "ph ph-taxi",
        },
        {
            id: 2,
            title: "Total des revenus",
            info: totalRevenu + "€",
            icon: "ph ph-bank",
        },
        {
            id: 3,
            title: "Total des clients",
            info: totalClient,
            icon: "ph ph-users-three",
        },
        {
            id: 4,
            title: "Total des chauffeurs",
            info: nbDriver,
            icon: "ph ph-address-book",
        },
    ]

    return (
        <>
            <Div>
                {
                    cards.map((card) => {
                        return <FinanceCards key={card.id} {...card} />
                    })
                }
            </Div>
        </>
    )
}

export default FinanceCard;