import React, {useState} from "react";
import {
    Container,
    Title,
    H1,
    DivDriver,
    Button
} from "./atoms";
import {
    Row
} from "../../../utils/Atoms";
import AddDriver from "../../../components/Partner/AddDriver";
import DriverList from "../../../components/Partner/DriverList";

function Team(){

    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Container>
                <Title>
                    <H1>Team</H1>
                </Title>
                <Row>
                    <AddDriver toggle={toggleIsOpen} isOpen={isOpen}/>
                    <DivDriver>
                        <i className="ph-plus"></i>
                        <Button onClick={toggleIsOpen}>Ajoutez un chauffeur</Button>
                    </DivDriver>
                </Row>
                <Row $rowDriver>
                    <DriverList/>
                </Row>
            </Container>
        </>
    )
}

export default Team