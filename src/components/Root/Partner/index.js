import React from "react";
import {Outlet} from "react-router-dom";
import HeaderDriver from "../../driver/HeaderDriver";
import Footer from "../../Footer";

function Partner() {
    return (
        <>
            <HeaderDriver />
            <Outlet />
            <Footer />
        </>
    )
}

export default Partner