import React from "react";
import { StyledInput } from "../../../utils/Atoms";
import styled from "styled-components";
import colors from "../../../colors";
import SuggestionItem from "../SuggestionItem";
import startIcon from "../../../assets/flag.svg";
import endIcon from "../../../assets/flag-outline.svg";


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

const Icon = styled.img`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    width: 25px;
    color: ${colors.fourth};
    cursor: pointer;
    z-index: 1;
    background-size: 100%;
    background-repeat: no-repeat;
`

function InputWrapper({isStart, value, toggleSuggest, handleClick, active, change, suggest}){

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
                    onFocus={() => {toggleSuggest(name); change({target: {name: name, value: ""}})}}
                />
                <Suggestions $active={active}>
                    <SuggestionItem propositions={suggest} isStart={isStart} handleClick={(e) => {handleClick(e); toggleSuggest(name)}} />
                </Suggestions>
                <Icon $start={isStart} src={isStart ? endIcon : startIcon}/>
            </InputWrap>
        </>
    )
}

export default InputWrapper