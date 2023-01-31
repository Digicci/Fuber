import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RoutesClient from "./Routes/RoutesClient";
import RoutesPartner from "./Routes/RoutesPartner";
import Error from "../../components/Error";
import PrivateRoute from "./Routes/privateRoute/Client";
import Home from "../../pages/Client/Home";
import Signup from "../../pages/Client/Signup";
import Login from "../../pages/Client/Login/index";
import Profile from "../../pages/Client/Profile";
import Wallet from "../../pages/Client/Wallet";
import MyRaces from "../../pages/Client/MyRaces";
import OrderRace from "../../pages/Client/OrderRace";
import Partner from "../../pages/Partner/SignIn";
import SignIn from "../../pages/Partner/SignIn";
import Account from "../../pages/Client/Account";
import StripeSuccess from "../../pages/Client/StripeSuccess";

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