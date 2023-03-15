import React from "react";
import {
    Container,
    Title,
    H1,
} from "./atoms";
import DashCards from "../../../components/Partner/DashCards";
import DriverList from "../../../components/Partner/DriverList";

function HomeDash() {
    return (
        <>
            <Container>
                <Title>
                    <H1>DashBoard</H1>
                </Title>
                <DashCards />
                <DriverList />
            </Container>
        </>
    )
}

export default HomeDash;