import React from "react";
import {
    StyledForm,
    StyledInput,
    StyledContainerInput,
} from "../../../utils/Atoms";
import {PaymentElement} from "@stripe/react-stripe-js";
import {
    ContainerForm,
} from "./atoms"

function AddCard(){

    return(
        <>
            <ContainerForm>
                        <StyledForm $formAddCard>
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