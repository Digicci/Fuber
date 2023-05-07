import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../Partner/Header";
import Footer from "../../Footer";
import { ProvideCsrf } from "../../../utils/hook/useCsrf";
import { ProvideAxios } from "../../../utils/hook/useAxios";
import { ProvideAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { ProvideStats } from "../../../utils/hook/Partner/useStats";
import { ToastContainer } from "react-toastify";

function Partner() {
    return (
        <>
            <ProvideCsrf>
                <ProvideAxios>
                    <ProvideAuthEntreprise>
                        <ProvideStats>
                            <Header/>
                            <div id="page_container">
                                <Outlet />
                                <ToastContainer style={{zIndex: 20000}} autoClose={5000}/>
                            </div>
                            <Footer />
                        </ProvideStats>
                    </ProvideAuthEntreprise>
                </ProvideAxios>
            </ProvideCsrf>
            
        </>
    )
}

export default Partner