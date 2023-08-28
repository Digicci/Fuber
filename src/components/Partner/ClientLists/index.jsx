import React from "react";
import { Div } from "./atoms";

function ClientLists({utilisateur, createdAt, driverPrice,}) {
  const [date, hour] = createdAt.split('T')
  const displayHour = hour.split('.')[0]
  return (
    <>
      <Div>
        <p>{utilisateur.nom} {utilisateur.prenom}</p>
        <p>{date} / {displayHour}</p>
        <p>{(driverPrice/100).toFixed(2)} €</p>
      </Div>
    </>
  )
}

export default ClientLists;