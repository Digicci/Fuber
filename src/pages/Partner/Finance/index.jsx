import React from "react";
import {
    Container,
    Title,
    Div,
    List,
    H4,
    ContainerSelect
} from "./atoms";
import FinanceCard from "../../../components/Partner/FinanceCard";
import ClientList from "../../../components/Partner/ClientList";
import SelectDriver from '../../../components/Partner/SelectDriver'
import SelectPeriod from '../../../components/Partner/SelectPeriode'

function Finance() {
  return (
    <>
        <Container>
            <Title>
                Finances
            </Title>
            <ContainerSelect>
              <SelectDriver/>
              <SelectPeriod/>
            </ContainerSelect>
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