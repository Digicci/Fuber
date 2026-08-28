import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthEntreprise } from "../../../../hook/Partner/useAuthEntreprise";

function PrivateRouteDriver({children}){
    const auth = useAuthEntreprise()
    const location = useLocation()

    // La redirection se fait en retournant <Navigate/> depuis le rendu.
    // L'ancienne version appelait navigate() dans un useEffect, or cette
    // fonction *retourne* du JSX : elle ne provoquait aucune navigation.
    if(!auth.isConnected()){
        return <Navigate to="/partner/login" state={{from:location}} replace />
    }

    return children
}

export default PrivateRouteDriver;
