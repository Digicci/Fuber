import React, { useEffect } from "react";
import { useCsrf } from "../../../utils/hook/useCsrf";
import { useParams } from "react-router-dom";
import { Container } from "./atoms";
import NavDash from "../../../components/Partner/NavDash";
import HomeDash from "../HomeDash";

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
            </Container>
        </>
    )
}

export default AccountDash;