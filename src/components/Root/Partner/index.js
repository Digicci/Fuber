import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../Partner/Header";
import Footer from "../../Footer";

function Partner() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Partner