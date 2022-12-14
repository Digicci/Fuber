import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import Error from "../../components/Error";
import Home from "../../pages/Home";

function Router() {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Routes />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Home/>
                }
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