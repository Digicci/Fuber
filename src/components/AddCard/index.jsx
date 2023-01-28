import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import {
    StyledForm,
    StyledInput,
    StyledContainerInput,
    LabelForm,
    SelectForm
} from "../../utils/Atoms";
import {PaymentElement} from "@stripe/react-stripe-js";


const ContainerForm = styled.div`
    padding: 0.5rem 1rem;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 6px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${colors.fifth};
    }
`
const DateAndCcv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 3rem;
`
const ContainerAddCard = styled.div`
    display: block;
    width: 100%;

`

function AddCard(){

    return(
        <>
            <ContainerForm>
                        <StyledForm $formAddCard>
                            {/*<StyledContainerInput $containerFormCard>
                                <LabelForm>Nom :</LabelForm>
                                <StyledInput
                                    $inputAddCard
                                    type="text"
                                    placeholder="Votre nom">
                                </StyledInput>
                            </StyledContainerInput>
                                <StyledContainerInput $containerFormCard>
                                <LabelForm>Numéro de carte :</LabelForm>
                                <StyledInput
                                $inputAddCard
                                type="text"
                                placeholder="Numéro de votre carte">
                                </StyledInput>
                                </StyledContainerInput>
                                <StyledContainerInput $containerFormCard>
                                <DateAndCcv>
                                <ContainerAddCard>
                                <LabelForm>Date d'expiration : </LabelForm>
                                <StyledInput
                                $inputAddCard
                                type="text"
                                placeholder="MM/AA">
                                </StyledInput>
                                </ContainerAddCard>
                                <ContainerAddCard>
                                <LabelForm>Code de sécurité : </LabelForm>
                                <StyledInput
                                $inputAddCard
                                type="text"
                                placeholder="CCV">
                                </StyledInput>
                                </ContainerAddCard>
                                </DateAndCcv>
                                </StyledContainerInput>
                                <StyledContainerInput $containerFormCard>
                                <LabelForm>Pays :</LabelForm>
                                <SelectForm>
                                <option value=''>--Choisir un pays--</option>
                                <option value='France'>France</option>
                                </SelectForm>
                                </StyledContainerInput>*/}
                            <PaymentElement />
                            <StyledContainerInput $containerFormCard>
                                <StyledInput $submit $colorAddCard 
                                type='submit' 
                                value="Ajouter carte"
                                ></StyledInput>
                            </StyledContainerInput>
                        </StyledForm>
                    </ContainerForm>
        </>
    )
}
export default AddCard