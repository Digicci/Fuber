import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Error from "../../components/Error";

function Router() {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Routes />,
            errorElement: <Error />,
            children: [

            ]
        }
    ])

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router