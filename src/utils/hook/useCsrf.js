import React, { useContext, useState, createContext } from "react";
import axios from "axios";

const apiPath = "http://localhost:8000/api";

const csrfContext = createContext();

export function ProvideCsrf({ children }) {
    const csrf = useProvideCsrf();
    return <csrfContext.Provider value={csrf}>{children}</csrfContext.Provider>;
}

export const useCsrf = () => {
    return useContext(csrfContext);
}

function useProvideCsrf() {
    const [token, setToken] = useState(null);

    const getCsrfToken = () => {
        let token
        axios.get(`${apiPath}/security/csrf/form`, { withCredentials: true }).then((res) => {
            setToken(res.data.csrfToken);
        })
    }

    return {
        token,
        getCsrfToken
    };
}