import React, {useState} from "react";
import {
    Div,
} from "./atoms";
import FinanceCards from "../FinanceCards";

function FinanceCard() {

    const cards = [
        {
            id: 1,
            title: "Total des courses",
            info: "40",
            icon: "ph ph-taxi",
        },
        {
            id: 2,
            title: "Total des revenus",
            info: "1200 €",
            icon: "ph ph-bank",
        },
        {
            id: 3,
            title: "Total des clients",
            info: "37",
            icon: "ph ph-users-three",
        },
        {
            id: 4,
            title: "Total des chauffeurs",
            info: "3",
            icon: "ph ph-address-book",
        },
    ]

    const [data,setData] = useState(cards)

    return (
        <>
            <Div>
                {
                    data.map((card) => {
                        return <FinanceCards key={card.id} {...card} />
                    })
                }
            </Div>
        </>
    )
}

export default FinanceCard;