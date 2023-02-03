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

function SuggestionItem({propositions, isStart, handleClick}) {

    const location = useLocation()

    


    return(
        
        <>
            {
                isStart && (
                    <Suggestion key='position' onClick={handleClick} data-name='start' data-lng={location.location.lng} data-lat={location.location.lat} data-label='Ma position'>Ma position</Suggestion>
                )
            }
            {
                (propositions && true && propositions !== []) && propositions.map((prop, index) => {
                    return <Suggestion key={`${index}-${prop.properties.label}`} onClick={handleClick} data-name={isStart ? 'start' : 'end'} data-lng={prop.geometry.coordinates[0]} data-lat={prop.geometry.coordinates[1]} data-label={prop.properties.label}>
                                {prop.properties.label}
                            </Suggestion>
                })
            }
            
        </>
    )
}

export default SuggestionItem