import React from "react";


function OptionDriver(props){

    return(
        <>
            <option
            value={props.id}>{props.nom} {props.prenom}</option>
        </>
    )
}

export default OptionDriver