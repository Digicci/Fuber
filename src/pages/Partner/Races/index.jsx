import React, {useState} from "react";
import {
    Container,
    Title,
    Modal,
    Button,
    Select,
} from "./atoms";
import OldRace from "../../../components/Partner/OldRace";
import CurrentRace from "../../../components/Partner/CurrentRace";

function Races(){

    const [races, setRaces] = useState(true)

    const toggleRace = (state) => {
        setRaces(state)
    }

    return(
        <>
            <Container>
                <Title>
                    Courses
                </Title>
                <Select>
                    <option value="1">Toutes les chauffeurs</option>
                    <option value="2">Chauffeur 1</option>
                    <option value="3">Chauffeur 2</option>
                    <option value="4">Chauffeur 3</option>
                </Select>
                <Modal>
                    <Button $buttonRaces={!races} $buttonRacesSelected={races} onClick={()=> {toggleRace(true)}}>
                        Courses en cours
                    </Button>
                    <Button $buttonOldRaces={races} $buttonOldRacesSelected={!races} onClick={() => {toggleRace(false)}}>
                        Anciennes courses
                    </Button>
                </Modal>
                {races ? (<CurrentRace/>) : (<OldRace/>)}
            </Container>
        </>
    )   
}

export default Races;