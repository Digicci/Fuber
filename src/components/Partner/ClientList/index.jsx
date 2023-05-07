import React, {useState} from "react";
import  {
    DivClient,
    Div,
}  from "./atoms";
import ClientLists from "../ClientLists";

function ClientList() {

    const infos = [
        {
            id: 1,
            nom: "Prenom.N",
            date: "01/01/2021",
            prix: "100€",
        },
        {
            id: 2,
            nom: "Prenom.N",
            date: "01/01/2021",
            prix: "100€",
        },
        {
            id: 3,
            nom: "Prenom.N",
            date: "01/01/2021",
            prix: "100€",
        },
    ]

    const [data, setData] = useState(infos);

    return (
        <>
        <DivClient>
            <Div>
            <p>Nom</p>
            <p>Date</p>
            <p>Prix</p>
            </Div>
            {
                data.map((client) => {
                    return (
                        <ClientLists key={client.id} {...client} />
                    )
                }
                )
            }
        </DivClient>
        </>
    )
}

export default ClientList;