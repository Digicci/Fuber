import React, {createContext, useContext, useState} from "react";
import { useAxios } from "../useAxios";
import {useCsrf} from "../useCsrf";

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
    const [card, setCard] = useState({});
    const [defaultCard, setDefaultCard] = useState(null);
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

    const getCards = async () => {
        const res = await axios.get(`${basePath}/cards`, { withCredentials: true })
        setCard(res.data)
        getDefault()
        return res;
    }

    const setDefault = (pm) => {
        setDefaultCard(card.find((c) => c.id === pm))
        return axios.post(`${basePath}/setDefault`, {pm}, { withCredentials: true })
    }

    const getDefault = () => {
        axios.get(`${basePath}/getDefault`, { withCredentials: true }).then((res) => {
          setDefaultCard(res.data)
        })
    }

    const deleteCard = (pm, csrf) => {
        return axios.post(`${basePath}/card/delete`, {pm, _csrf: csrf}, { withCredentials: true })
    }

    return {
        card,
        defaultCard,
        getUserToken,
        getCards,
        saveIntent,
        addCard,
        setDefault,
        deleteCard
    };
}


