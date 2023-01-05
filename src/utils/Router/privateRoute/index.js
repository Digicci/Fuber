import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const PrivateRoute = ({component, ...other}) => {
    const auth = useAuth()
    if (!auth.isConnected()) {
        return <Navigate to="/login" />
    }
    return (
      <>
          <Route element={component} {...other} />
      </>
  )
}

export default PrivateRoute;