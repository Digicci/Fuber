import React, { useState} from "react";
import DriverItem from "../DriverItem";
import {useAuthEntreprise} from "../../../utils/hook/Partner/useAuthEntreprise";
import {
    List,
    H4,
    Div
} from "./atoms";
import {Loader} from "../../../utils/Atoms";


function DriverList() {
    const auth = useAuthEntreprise()
    const [team, setTeam] = useState(auth.entreprise.employes)

    return (
        <>
            <List>
                <H4>
                    Chauffeurs
                    <i className="ph-bold ph-dots-three"></i>
                </H4>
                <Div>
                    {team ? team.map((item, index) => {
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