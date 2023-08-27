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
import SelectDriver from '../../../components/Partner/SelectDriver'

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
                <SelectDriver/>
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