import React, {createContext, useContext, useState} from "react";
import { useAxios } from "./useAxios";
import {useCsrf} from "./useCsrf";

const cardContext = createContext();
const basePath = "user";
export const ProvideCard = ({ children }) => {
    const card = useProvideCard();
    return <cardContext.Provider value={card}>{children}</cardContext.Provider>;
}

export const useCard = () => {
    return useContext(cardContext);
}

function useProvideCard() {
    const [card, setCard] = useState(null);
    const axios = useAxios();
    const csrf = useCsrf();

    const getUserToken = () => {
        csrf.getCsrfToken()
        return axios.post(`${basePath}/addCardIntent`, {_csrf: csrf.token}, { withCredentials: true })
    }

    return {
        card,
        getUserToken
    };
}


