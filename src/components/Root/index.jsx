import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NavResponsive from "../NavResponsive";
import { ProvideAuth } from "../../utils/hook/useAuth";
import { ProvideAxios } from "../../utils/hook/useAxios";

function Root(){
    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <ProvideAxios>
                <ProvideAuth>
                    <Header toggle={toggleIsOpen}/>
                    <NavResponsive toggle={toggleIsOpen} isOpen={isOpen}/>
                    <div id="page__container">
                        <Outlet/>
                    </div>
                    <Footer/>
                </ProvideAuth>
            </ProvideAxios>
        </>
    )
}
export default Root