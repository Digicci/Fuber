import React from "react";
import {
    Container,
    Title,
    H1,
} from "./atoms";
import DashCards from "../../../components/Partner/DashCards";

function HomeDash() {
    return (
        <>
            <Container>
                <Title>
                    <H1>DashBoard</H1>
                </Title>
                <DashCards />
            </Container>
        </>
    )
}

export default HomeDash;