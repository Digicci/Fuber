import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import Error from "../../components/Error";
import PrivateRoute from "./privateRoute";
import Home from "../../pages/Home";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Wallet from "../../pages/Wallet";
import MyRaces from "../../pages/MyRaces";
import OrderRace from "../../pages/OrderRace";
import Partner from "../../pages/driver/Partner";

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
                },
                {
                    path:"/partner",
                    element: <Partner/>
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