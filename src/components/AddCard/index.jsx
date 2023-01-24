import React from "react";
import {
    StyledForm,
    StyledInput,
    StyledContainerInput,
    LabelForm,
    SelectForm
} from "../../utils/Atoms";
import {
    ContainerForm,
    DateAndCcv,
    ContainerAddCard,
} from "./atoms"



function AddCard(){

    return(
        <>
            <ContainerForm>
                        <StyledForm $formAddCard>
                            <StyledContainerInput $containerFormCard>
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
                            </StyledContainerInput>
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