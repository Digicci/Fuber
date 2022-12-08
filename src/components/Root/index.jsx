import React from "react";
import { Outlet } from "react-router-dom";

function Root(){

    return(
        <>
            <div id="page__container">
                <Outlet/>
            </div>
        </>
    )
}
export default Root