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
    const price = useSelector(getAuthUser);
    return (
        <>
            <Container>
                {
                    price.prix === null &&
                        <Alert>
                            <p>
                                Veuillez renseigné le prix au kilomètre dans la section profile
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