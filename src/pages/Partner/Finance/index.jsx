import React, {useState} from "react";
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
  const [period, setPeriod] = useState("all");
  return (
    <>
        <Container>
            <Title>
                Finances
            </Title>
            <ContainerSelect>
              <SelectDriver/>
              <SelectPeriod period={period} setPeriod={setPeriod} />
            </ContainerSelect>
            <FinanceCard/>
            <Div>
                <List>
                    <H4>
                        Tous les clients
                    </H4>
                    <ClientList period={period} />
                </List>
            </Div>
        </Container>
    </>
  )
}

export default Finance;