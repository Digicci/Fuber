import React,{useState} from "react";
import styled from "styled-components";
import NavProfile from "../../components/NavProfile";
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    ContainerModal,
    StyledLink,
    ButtonRace
} from "../../utils/Atoms";
import colors from "../../colors";
import AddMyRace from "../../components/AddMyRaces";
import OldRaces from "../../components/OldRaces";



function MyRaces(){

    const [races, setRaces] = useState(true)

    const toggleMyRace = (state) => {
        setRaces(state)
    }

    return (
        <>
            <ContainerProfile>
                <NavProfile activePage='myraces' />
                <ContainerInfo>
                    <TitlePage>
                        Mes courses
                    </TitlePage>
                    <ContainerModal $containerMyRaces>
                        <ButtonRace $buttonMyRacesSelected={races} $buttonMyRaces={!races} onClick={() => {toggleMyRace(true)}}>
                            Mes courses
                        </ButtonRace>
                        <ButtonRace $buttonOldRacesSelected={!races} $buttonOldRaces={races} onClick={() => {toggleMyRace(false)}}>
                            Anciennes Course
                        </ButtonRace>
                    </ContainerModal>
                    {races ? (<AddMyRace/>) : (<OldRaces/>) }
                </ContainerInfo>
            </ContainerProfile>
        </>
    )
}

export default MyRaces