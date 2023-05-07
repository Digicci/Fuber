import React from "react";
import { Div } from "./atoms";

function ClientLists({nom, date, prix}) {
  return (
    <>
      <Div>
        <p>{nom}</p>
        <p>{date}</p>
        <p>{prix}</p>
      </Div>
    </>
  )
}

export default ClientLists;