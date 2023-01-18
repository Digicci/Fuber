import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NavResponsive from "../NavResponsive";
import { ProvideAuth } from "../../utils/hook/useAuth";
import { ProvideAxios } from "../../utils/hook/useAxios";
import { ProvideCsrf } from "../../utils/hook/useCsrf";
import { ProvideLocation } from "../../utils/hook/useLocation";

function Root(){
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
                            </div>
                            <Footer/>
                        </ProvideAuth>
                    </ProvideLocation>
                </ProvideAxios>
            </ProvideCsrf>
        </>
    )
}
export default Root