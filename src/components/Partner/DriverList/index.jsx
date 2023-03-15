import React from "react";
import DriverLists from "../DriverLists";
import {
    List,
    H4,
    Div
} from "./atoms";


function DriverList() {
    return (
        <>
            <List>
                <H4>
                    Chauffeurs
                    <i className="ph-dots-three"></i>
                </H4>
                <Div>
                    <DriverLists/>
                </Div>
            </List>
        </>
    )
}

export default DriverList;