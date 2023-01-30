import React,{useState} from "react";
import NavProfile from "../../../components/Client/NavProfile";
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    ContainerModal,
    ButtonRace
} from "../../../utils/Atoms";
import AddMyRace from "../../../components/Client/AddMyRaces";
import OldRaces from "../../../components/Client/OldRaces";
import { useTranslation } from "react-i18next";



function MyRaces(){

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});

    const [races, setRaces] = useState(true)

    const toggleMyRace = (state) => {
        setRaces(state)
    }

    return (
        <>
            <ContainerInfo>
                <TitlePage>
                    {t('global.my races')}
                </TitlePage>
                <ContainerModal $containerMyRaces>
                    <ButtonRace $buttonMyRacesSelected={races} $buttonMyRaces={!races} onClick={() => {toggleMyRace(true)}}>
                        {t('global.my races')}
                    </ButtonRace>
                    <ButtonRace $buttonOldRacesSelected={!races} $buttonOldRaces={races} onClick={() => {toggleMyRace(false)}}>
                        {t('myRaces.old races')}
                    </ButtonRace>
                </ContainerModal>
                {races ? (<AddMyRace/>) : (<OldRaces/>) }
            </ContainerInfo>
        </>
    )
}

export default MyRaces