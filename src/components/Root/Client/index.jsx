import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Client/Header";
import NavResponsive from "../../Client/NavResponsive";
import {ProvideAuth} from "../../../utils/hook/Client/useAuth";
import {ProvideAxios} from "../../../utils/hook/useAxios";
import {ProvideCsrf} from "../../../utils/hook/useCsrf";
import {ProvideLocation} from "../../../utils/hook/useLocation";
import {ValidatorProvider} from "../../../utils/hook/useValidator";
import {ProvideCard} from "../../../utils/hook/Client/useCard";
import {RaceProvider} from "../../../utils/hook/Client/useRace";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SocketProvider} from "../../../utils/hook/useWebSocket";

function Client() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ProvideCsrf>
                <ProvideAxios>
                    <RaceProvider>
                        <ProvideLocation>
                            <ProvideAuth>
                                <ValidatorProvider>
                                    <ProvideCard>
                                        <SocketProvider>
                                            <Header toggle={toggleIsOpen}/>
                                            <NavResponsive toggle={toggleIsOpen} isOpen={isOpen}/>
                                            <div id="page__container">
                                                <Outlet/>
                                                <ToastContainer style={{zIndex: 20000}} autoClose={5000}/>
                                            </div>
                                            <Footer/>
                                        </SocketProvider>
                                    </ProvideCard>
                                </ValidatorProvider>
                            </ProvideAuth>
                        </ProvideLocation>
                    </RaceProvider>
                </ProvideAxios>
            </ProvideCsrf>
        </>
    )
}

export default Client