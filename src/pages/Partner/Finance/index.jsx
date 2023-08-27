import React from "react";
import {
    Container,
    Title,
    Div,
    Select,
    List,
    H4,
} from "./atoms";
import FinanceCard from "../../../components/Partner/FinanceCard";
import ClientList from "../../../components/Partner/ClientList";
import SelectDriver from '../../../components/Partner/SelectDriver'

function Finance() {
  return (
    <>
        <Container>
            <Title>
                Finances
            </Title>
            <SelectDriver/>
            <FinanceCard/>
            <Div>
                <List>
                    <H4>
                        Tous les clients
                    </H4>
                    <ClientList/>
                </List>
            </Div>
        </Container>
    </>
  )
}

export default Finance;