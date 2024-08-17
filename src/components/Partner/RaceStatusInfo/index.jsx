import React from 'react'
import { DivRace, Info } from './atoms'
import CarType from '../../../utils/Data/Partner/CarType'
import RaceStatusButton from "../RaceStatusButton";

function RaceStatusInfo({ id, state, driverPrice, start, end, createdAt,driver, utilisateur  }) {
    console.log(id)
    const type = CarType.find((car) => car.value === driver?.vehicule.type)?.type
    const [date, hour] = createdAt?.split('T') || ['','']
    const displayHour = hour?.split('.')[0]
    const marque = `${driver?.vehicule?.marque.charAt(0).toUpperCase()}${driver?.vehicule?.marque.slice(1)}`
    return (
        <DivRace>
            <Info>
                <h4>{type || ''} {marque || ''} par {driver?.nom} {driver?.prenom}</h4>
                <h5> {utilisateur?.nom} {utilisateur?.prenom}</h5>
                <h5>{((driverPrice || 0)/100).toFixed(2)} €</h5>
                <h5>{start || ""}</h5>
                <h5>{end || ""}</h5>
                <h5>{date || ''} / {displayHour || ''}</h5>
            </Info>
            {state === "pending" && <RaceStatusButton raceId={id} />
            }
        </DivRace>
    )
}

export default RaceStatusInfo