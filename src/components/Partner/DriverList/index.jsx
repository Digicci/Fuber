import React, { useState} from "react";
import DriverItem from "../DriverItem";
import {useAuthEntreprise} from "../../../utils/hook/Partner/useAuthEntreprise";
import { useSelector } from "react-redux";
import { getTeam } from "../../../utils/store/Partner/selectors/AuthSelectors";
import {
    List,
    H4,
    Div
} from "./atoms";


function DriverList() {
    const team = useSelector(getTeam)

    return (
        <>
            <List>
                <H4>
                    Chauffeurs
                    <i className="ph-bold ph-dots-three"></i>
                </H4>
                <Div>
                    {team.length > 0 ? team.map((item, index) => {
                        return (
                            <DriverItem key={index} item={item}/>
                        )
                    }): <p>Vous n'avez pas encore d'équipe</p>}
                </Div>
            </List>
        </>
    )
}

export default DriverList;