import React from "react";
import { useLocation } from "../../../utils/hook/useLocation";

import styled from "styled-components";
import colors from "../../../colors";

const Suggestion = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    margin: 0.1rem 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    text-align: left;
    width: 95%;
    border-radius: 5px;
    &:hover{
        background: ${colors.fourth};
    }
`

function SuggestionItem({propositions, isStart}) {

    const location = useLocation()

    


    return(
        
        <>
            {
                isStart && (
                    <Suggestion key='position' datalng={location.location.lng} datalat={location.location.lat}>Ma position</Suggestion>
                )
            }
            {
                (propositions && true && propositions !== []) && propositions.map((prop, index) => {
                    return <Suggestion key={`${index}`} datalng={prop.geometry.coordinates[0]} datalat={prop.geometry.coordinates[1]}>
                                {prop.properties.label}
                            </Suggestion>
                })
            }
            
        </>
    )
}

export default SuggestionItem