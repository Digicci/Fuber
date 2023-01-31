import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hook/useAuth";

function PrivateRoute({children}){
    const auth = useAuth()
    const location = useLocation()

    if(!auth.isConnected){
        return <Navigate to="/login" state={{from:location}} replace />
    }


    return children
}

export default PrivateRoute;