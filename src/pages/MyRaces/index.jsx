import React,{useState} from "react";
import styled from "styled-components";
import NavProfile from "../../components/NavProfile";
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    ContainerModal,
    StyledLink
} from "../../utils/Atoms";
import colors from "../../colors";
import AddMyRace from "../../components/AddMyRaces";
import OldRaces from "../../components/OldRaces";



function MyRaces(){

    const [myRace, setMyRace] = useState(true)

    const toggleMyRace = (state) => {
        setMyRace(state)
    }

    return (
        <>
            <ContainerProfile>
                <NavProfile />
                <ContainerInfo>
                    <TitlePage>
                        Mes courses
                    </TitlePage>
                    <ContainerModal $containerMyRaces>
                        <StyledLink $buttonMyRaces onClick={() => {toggleMyRace(true)}}>
                            Mes courses
                        </StyledLink>
                        <StyledLink $buttonOldRaces onClick={() => {toggleMyRace(false)}}>
                            Anciennes Course
                        </StyledLink>
                    </ContainerModal>
                    {myRace ? (<AddMyRace/>) : (<OldRaces/>) }
                </ContainerInfo>
            </ContainerProfile>
        </>
    )
}

export default MyRaces