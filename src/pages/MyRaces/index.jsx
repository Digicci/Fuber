import React,{useState} from "react";
import NavProfile from "../../components/NavProfile";
import {
    ContainerProfile,
    ContainerInfo,
    TitlePage,
    ContainerModal,
    ButtonRace
} from "../../utils/Atoms";
import AddMyRace from "../../components/AddMyRaces";
import OldRaces from "../../components/OldRaces";
import { useTranslation } from "react-i18next";



function MyRaces(){

    const {t, i18n} = useTranslation('translation', {keyPrefix: ''});

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
            </ContainerProfile>
        </>
    )
}

export default MyRaces