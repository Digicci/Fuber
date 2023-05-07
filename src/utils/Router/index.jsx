import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutesClient from "./Routes/RoutesClient";
import RoutesPartner from "./Routes/RoutesPartner";
import Error from "../../components/Error";
import PrivateRoute from "./Routes/privateRoute/Client";
import Home from "../../pages/Client/Home";
import Signup from "../../pages/Client/Signup";
import Login from "../../pages/Client/Login/index";
import OrderRace from "../../pages/Client/OrderRace";
import SignIn from "../../pages/Partner/SignIn";
import Account from "../../pages/Client/Account";
import LogIn from "../../pages/Partner/LogIn";
import PrivateRouteDriver from "./Routes/privateRoute/Partner";
import AccountDash from "../../pages/Partner/AccountDash";

function Router() {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RoutesClient />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/signup",
                    element: <Signup/>
                },
                {
                    path: "account/:page",
                    element: <PrivateRoute>
                                <Account/>
                            </PrivateRoute>
                },
                {
                    path: "account/:page/*",
                    element: <PrivateRoute>
                                <Account/>
                            </PrivateRoute>
                },
                {
                    path: "/order",
                    element: <OrderRace/>
                }
            ]
        },
        {
            path: "/partner",
            element: <RoutesPartner />,
            errorElement: <Error />,
            children: [
                {
                    path: "/partner/signin",
                    element: <SignIn />
                },
                {
                    path:"/partner/login",
                    element: <LogIn />
                },
                {
                    path: "/partner/account/:page",
                    element: <PrivateRouteDriver>
                                <AccountDash/>
                            </PrivateRouteDriver>
                },
                {
                    path: "/partner/account/:page/*",
                    element: <PrivateRouteDriver>
                                <AccountDash/>
                            </PrivateRouteDriver>
                },
                            
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