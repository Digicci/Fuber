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


    const getUserToken = () => {
        return axios.get(`${basePath}/addCardIntent`, { withCredentials: true })
    }

    const saveIntent = () => {
        return axios.get(`${basePath}/saveCardIntent`, { withCredentials: true })
    }

    const addCard = (data) => {
        return axios.post(`${basePath}/addCard`, data, { withCredentials: true })
    }

    const getCards = () => {
        return axios.get(`${basePath}/cards`, { withCredentials: true })
    }

    const deleteCard = (pm, csrf) => {
        return axios.post(`${basePath}/card/delete`, {pm, _csrf: csrf}, { withCredentials: true })
    }

    return {
        card,
        getUserToken,
        getCards,
        saveIntent,
        addCard,
        deleteCard
    };
}


