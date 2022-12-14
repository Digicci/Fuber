import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({component, ...other}) => {
    const token = localStorage.getItem("token") ?? null;// Get token from cookies here
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
      <>
          <Route element={component} {...other} />
      </>
  )
}

export default PrivateRoute;