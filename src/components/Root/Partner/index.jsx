import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../Partner/Header";
import Footer from "../../Footer";

function Partner() {
    return (
        <>
            <Header/>
            <div id="page_container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Partner