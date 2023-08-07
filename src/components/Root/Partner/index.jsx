import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../Partner/Header";
import { ProvideCsrf } from "../../../utils/hook/useCsrf";
import { ProvideAxios } from "../../../utils/hook/useAxios";
import { ProvideAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { ProvideStats } from "../../../utils/hook/Partner/useStats";
import { ToastContainer } from "react-toastify";
import {Provider as StoreProvider} from "react-redux";
import store from "../../../utils/store/Partner"

function Partner() {
    return (
        <>
            <ProvideCsrf>
                <ProvideAxios>

                    <StoreProvider store={store}>
                        <ProvideAuthEntreprise>
                            <ProvideStats>
                                <Header/>
                                <div id="page_container">
                                    <Outlet />
                                    <ToastContainer style={{zIndex: 20000}} autoClose={5000}/>
                                </div>
                            </ProvideStats>
                        </ProvideAuthEntreprise>
                    </StoreProvider>
                </ProvideAxios>
            </ProvideCsrf>

        </>
    )
}

export default Partner