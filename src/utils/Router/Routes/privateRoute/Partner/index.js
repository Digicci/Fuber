import React, {useEffect} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthEntreprise } from "../../../../hook/Partner/useAuthEntreprise";

function PrivateRouteDriver({children}){
    const auth = useAuthEntreprise()
    const location = useLocation()

    useEffect(() => {
        if(!auth.isConnected()){
            navigate();
        }
    }, [auth]);
        
    const navigate = () => {
        return <Navigate to="/partner/login" state={{from:location}} replace />
    }

    return auth.isConnected() ? children : navigate();
}

export default PrivateRouteDriver;
