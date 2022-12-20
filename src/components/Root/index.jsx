import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NavResponsive from "../NavResponsive";
import { ProvideAuth } from "../../utils/hook/useAuth";

function Root(){
    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <ProvideAuth>
                <Header toggle={toggleIsOpen}/>
                <NavResponsive toggle={toggleIsOpen} isOpen={isOpen}/>
                <div id="page__container">
                    <Outlet/>
                </div>
                <Footer/>
            </ProvideAuth>
        </>
    )
}
export default Root