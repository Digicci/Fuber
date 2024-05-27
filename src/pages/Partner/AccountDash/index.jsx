import React, { useEffect } from "react";
import { useCsrf } from "../../../utils/hook/useCsrf";
import { useParams } from "react-router-dom";
import { Container } from "./atoms";
import NavDash from "../../../components/Partner/NavDash";
import HomeDash from "../HomeDash";
import Team from "../Team";
import Races from "../Races";
import Finance from "../Finance";
import Profil from "../Profil";
import OrderAccept from '../../../components/Partner/OrderAccept'


function AccountDash() {
    const csrf = useCsrf();
    const { page } = useParams();

    useEffect(() => {
        csrf.getCsrfToken();
    }, []);

    return (
        <>
            <Container>
                <NavDash activePage={page}/>
                    {
                      page === "home" && <HomeDash />
                    }
                    {
                      page === 'races' && <Races />
                    }
                    {
                      page === "team" && <Team />
                    }
                    {
                      page === "finances" && <Finance/>
                    }
                    {
                      page === "profile" && <Profil/>
                    }
                <OrderAccept/>
            </Container>
        </>
    )
}

export default AccountDash;