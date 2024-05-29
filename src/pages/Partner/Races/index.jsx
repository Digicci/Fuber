import React, {useState} from "react";
import {
    Container,
    Title,
    Modal,
    Button,
    Select,
} from "./atoms";
import RaceByStatus from "../../../components/Partner/RaceByStatus";
import SelectDriver from '../../../components/Partner/SelectDriver'

function Races(){

    const [races, setRaces] = useState(true)

    const toggleRace = (state) => {
        setRaces(state)
    }

    const status = races? 'pending' : 'done'
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
                <RaceByStatus status={status}/>
            </Container>
        </>
    )
}

export default Races;