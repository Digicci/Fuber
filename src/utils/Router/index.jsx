import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RoutesClient from "./Routes/RoutesClient";
import RoutesPartner from "./Routes/RoutesPartner";
import Error from "../../components/Error";
import PrivateRoute from "./Routes/privateRoute/Client";
import Home from "../../pages/Home";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login/index";
import Profile from "../../pages/Profile";
import Wallet from "../../pages/Wallet";
import MyRaces from "../../pages/MyRaces";
import OrderRace from "../../pages/OrderRace";
import Partner from "../../pages/Partner/SignIn";
import SignIn from "../../pages/Partner/SignIn";

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
                    path: "/profile",
                    element: <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                },
                {
                    path: "/wallet",
                    element : <PrivateRoute>
                                <Wallet/>
                            </PrivateRoute>
                },
                {
                    path: "/myraces",
                    element : <PrivateRoute>
                                <MyRaces/>
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