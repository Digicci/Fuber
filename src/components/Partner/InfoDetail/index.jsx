import React, {useState} from "react";
import {Cards} from "./atoms";
import Detail from "../../../utils/Data/Partner/Detail";
import InfoDetails from "../InfoDetails";

function InfoDetail(){

    const [data, setData] = useState(Detail)

    return(
        <>
            <Cards>
                {
                    data.map((card) => {
                        return <InfoDetails key={card.id} {...card} />
                    })
                }
            </Cards>
        </>
    )
}
export default InfoDetail;