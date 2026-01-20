import React from "react";
import {
    Container,
    Title,
    H1, Alert
} from './atoms'
import DashCards from "../../../components/Partner/DashCards";
import DriverList from "../../../components/Partner/DriverList";
import { useSelector } from 'react-redux'
import { getAuthUser } from '../../../utils/store/Partner/selectors/AuthSelectors'

function HomeDash() {
    const user = useSelector(getAuthUser);
    return (
        <>
            <Container>
                {
                    (!user.prix || !user.vehicule) &&
                        <Alert>
                            <p>
                                Attention, votre compte ne vous permet pas de passer en ligne.
                                <br/>
                                Afin de passer en ligne merci de renseigner un prix au kilomètre, ainsi qu'un véhicule dans la section profile.
                            </p>
                        </Alert>
                }
                <Title>
                    <H1>DashBoard</H1>
                </Title>
                <DashCards />
                <DriverList />
            </Container>
        </>
    )
}

export default HomeDash;