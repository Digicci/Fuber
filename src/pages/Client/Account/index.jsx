import React, {useEffect} from "react";
import {useCsrf} from "../../../utils/hook/useCsrf";
import { useParams } from "react-router-dom";
import {ContainerProfile} from "../../../utils/Atoms";
import NavProfile from "../../../components/Client/NavProfile";
import Wallet from "../Wallet";
import MyRaces from "../MyRaces";
import Profile from "../Profile";
import {ProvideCard} from "../../../utils/hook/useCard";

function Account() {

    const csrf = useCsrf();
    const { page } = useParams();

    useEffect(() => {
        csrf.getCsrfToken();
    }, []);

  return (
      <>
        <ContainerProfile>
            <NavProfile activePage={page}/>
            {
                page === "profile" && <Profile/>
            }
            {
                page === "wallet" && <ProvideCard><Wallet/></ProvideCard>
            }
            {
                page === "myraces" && <MyRaces/>
            }
        </ContainerProfile>
      </>
  );
}

export default Account;