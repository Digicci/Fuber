import React, { useState } from "react";
import DashCard from "../DashCard";
import Dash from "../../../utils/Data/Partner/Dash";
import {
    Row
} from "../../../utils/Atoms"

function DashCards() {

    const [data, setData] = useState(Dash)

    return (
        <>
            <Row $col>
                {
                    data.map((card) => {
                        return <DashCard key={card.id} {...card} $first={card.id[1]} />
                        
                    })
                }
                
            </Row>
        </>
    )
}

export default DashCards
