import React from "react";
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

function MyRaces(){

    return (
        <>
            <ContainerProfile>
                <NavProfile />
                <ContainerInfo>
                    <TitlePage>
                        Mes courses
                    </TitlePage>
                    <ContainerModal $containerMyRaces>
                        <StyledLink>
                            Mes courses
                        </StyledLink>
                        <StyledLink>
                            Anciennes Course
                        </StyledLink>
                    </ContainerModal>
                </ContainerInfo>
            </ContainerProfile>
        </>
    )
}

export default MyRaces