import React from "react";
import { StyledInput } from "../../../utils/Atoms";
import styled from "styled-components";
import colors from "../../../colors";
import SuggestionItem from "../SuggestionItem";


 const InputWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`
 const Suggestions = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: center;
    display: none;
    position: absolute;
    background: ${colors.primary};
    border: 1px solid ${colors.fourth};
    border-radius: 5px;
    padding: 0.5rem 0;
    box-shadow: 0 0 10px 0 ${colors.shade};
    top: 100%;
    z-index: 2;
    h3{
        font-size: 1.25rem;
    }
  
    ${(props) => props.$active && `
        display: flex;
    `}
`

function InputWrapper({isStart, value, toggleSuggest, active, change, suggest}){

    const placeholder = isStart ? "Lieu de prise en charge" : "Déstination"

    const name = isStart ? "start" : "end"
    return(
        <>
            <InputWrap>
                <StyledInput
                    value={value}
                    $inputAddCard
                    type="text"
                    placeholder={placeholder}
                    name={name}
                    onChange={change}
                    onFocus={() => {toggleSuggest({name})}}
                    onBlur={() => {toggleSuggest({name})}}
                />
                <Suggestions $active={active}>
                    <SuggestionItem propositions={suggest} isStart={isStart} />
                </Suggestions>
            </InputWrap>
        </>
    )
}

export default InputWrapper