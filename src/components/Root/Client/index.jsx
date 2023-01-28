import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import NavResponsive from "../../NavResponsive";
import { ProvideAuth } from "../../../utils/hook/useAuth";
import { ProvideAxios } from "../../../utils/hook/useAxios";
import { ProvideCsrf } from "../../../utils/hook/useCsrf";
import { ProvideLocation } from "../../../utils/hook/useLocation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Client(){
    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <ProvideCsrf>
                <ProvideAxios>
                    <ProvideLocation>
                        <ProvideAuth>
                            <Header toggle={toggleIsOpen}/>
                            <NavResponsive toggle={toggleIsOpen} isOpen={isOpen}/>
                            <div id="page__container">
                                <Outlet/>
                                <ToastContainer style={{zIndex:20000}} autoClose={5000} />
                            </div>
                            <Footer/>
                        </ProvideAuth>
                    </ProvideLocation>
                </ProvideAxios>
            </ProvideCsrf>
        </>
    )
}
export default Client