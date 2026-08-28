import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hook/Client/useAuth";

function PrivateRoute({children}){
    const auth = useAuth()
    const location = useLocation()

    // Tant que la session n'est pas verifiee, on ne redirige pas : sinon tout
    // premier rendu renvoyait vers /login, meme avec une session valide.
    if (auth.loading) {
        return null
    }

    if(!auth.isConnected()){
        return <Navigate to="/login" state={{from:location}} replace />
    }
    return children
}

export default PrivateRoute;
