import React from "react";
import { 
    Container,
    ContainerForm,
    ContainerSignup
} from "./atoms";

function Partner(){

    return(
        <>
            <Container>
                <ContainerSignup $cover>
                    <ContainerForm>
                        <h2>Lancez-vous !</h2>
                        
                    </ContainerForm>
                </ContainerSignup>
            </Container>
        </>
    )
}
export default Partner