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
import ForgotPasswordClient from '../../pages/Client/ForgotPasswordClient'
import ForgotPasswordPartner from '../../pages/Partner/ForgotPasswordPartner'
import PasswordReset from '../../pages/ResetPassword'
import CheckEmailClient from '../../pages/Client/CheckEmailClient'
import CheckEmailPartner from '../../pages/Partner/CheckEmailPartner'
import ValidationAccountClient from '../../pages/Client/ValidationAccountClient'
import ValidationAccountPartner from '../../pages/Partner/ValidationAccountPartner'

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
                    path: "/order",
                    element: <OrderRace/>
                },
                {
                    path: "/forgot-password",
                    element: <ForgotPasswordClient/>
                    
                },
                {
                    path: "/reset-password",
                    element: <PasswordReset/>

                },
                {
                    path:"/check-email",
                    element: <CheckEmailClient/>
                },
                {
                    path:"/validation/:validationCode",
                    element: <ValidationAccountClient/>
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
                {
                    path: "/partner/forgot-password",
                    element: <ForgotPasswordPartner/>

                },
                {
                    path: "/partner/reset-password",
                    element: <PasswordReset/>

                },
                {
                    path:"/partner/check-email",
                    element: <CheckEmailPartner/>
                },
                {
                    path: "/partner/validation/:validationCode",
                    element: <ValidationAccountPartner />
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