import React from "react";
import {
    Card,
    TopCard,
    BottomCard
} from "./atoms";

function InfoDetails({icon,info}){

    return(
        <>
            <Card>
                <TopCard>
                <i className={icon}></i>
                </TopCard>
                <BottomCard>
                    <p>{info}</p>
                </BottomCard>
            </Card>
        </>
    )
}

export default InfoDetails;