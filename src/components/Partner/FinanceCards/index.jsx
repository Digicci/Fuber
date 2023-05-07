import React from "react";
import {
    Card,
    TopCard,
    BottomCard
} from "./atoms";

function FinanceCards({title, info, icon}) {
  return (
    <>
        <Card>
            <TopCard $firstText>
                <p>{title}</p>
            </TopCard>
            <TopCard>
                <p>{info} </p>
            </TopCard>
            <BottomCard>
                <i className={icon}></i>
            </BottomCard>
        </Card>
    </>
  )
}

export default FinanceCards;