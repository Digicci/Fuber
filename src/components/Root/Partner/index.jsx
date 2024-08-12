import React from "react";
import './atoms.css'
import {Outlet} from "react-router-dom";
import Header from "../../Partner/Header";
import { ProvideCsrf } from "../../../utils/hook/useCsrf";
import { ProvideAxios } from "../../../utils/hook/useAxios";
import { ProvideAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { ProvideStats } from "../../../utils/hook/Partner/useStats";
import { ToastContainer } from "react-toastify";
import {Provider as StoreProvider} from "react-redux";
import store from "../../../utils/store/Partner"
import {SocketProvider} from "../../../utils/hook/useWebSocket";
import {DriverLocationProvider} from "../../../utils/hook/Partner/useDriverLocation";

function Partner() {
    return (
        <>
            <ProvideCsrf>
                <ProvideAxios>
                    <DriverLocationProvider>
                        <StoreProvider store={store}>
                            <ProvideAuthEntreprise>
                                <ProvideStats>
                                    <SocketProvider>
                                        <Header/>
                                        <div id="page_container_partner">
                                            <Outlet />
                                            <ToastContainer style={{zIndex: 20000}} autoClose={5000}/>
                                        </div>
                                    </SocketProvider>
                                </ProvideStats>
                            </ProvideAuthEntreprise>
                        </StoreProvider>
                    </DriverLocationProvider>
                </ProvideAxios>
            </ProvideCsrf>

        </>
    )
}

export default Partner