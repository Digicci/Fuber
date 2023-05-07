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

function Finance() {
  return (
    <>
        <Container>
            <Title>
                Finances
            </Title>
            <Select>
                <option value="1">Toutes les chauffeurs</option>
                <option value="2">Chauffeur 1</option>
                <option value="3">Chauffeur 2</option>
                <option value="4">Chauffeur 3</option>
            </Select>
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