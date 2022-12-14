import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NavResponsive from "../NavResponsive";

function Root(){
    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <Header toggle={toggleIsOpen}/>
            <NavResponsive toggle={toggleIsOpen} isOpen={isOpen}/>
            <div id="page__container">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}
export default Root