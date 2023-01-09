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

const MyRaceH3 = styled.h3`
    font-size: 1.15rem;
    font-weight: 600;
`

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
                    {myRace ? (<MyRaceH3>mes courses</MyRaceH3>) : (<MyRaceH3> ancienne courses</MyRaceH3>) }
                </ContainerInfo>
            </ContainerProfile>
        </>
    )
}

export default MyRaces