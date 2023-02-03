import React, {useState} from "react";
import InputWrapper from "../InputWrapper";
import { useAxios } from "../../../utils/hook/useAxios";
import { useLocation } from "../../../utils/hook/useLocation";

function RaceState(){

    const [suggest, setSuggest] = useState({
        start: false,
        end: false
    })
    //Fonction qui permet de toggle les suggestions
    const toggleSuggest = (name) => {
        const state = {...suggest, [name]: !suggest[name]}
        setSuggest(state)
    }

    const location = useLocation()
    const axios = useAxios()


    const [raceInfo, setRaceInfo] = useState({
        start: localStorage.getItem('raceStart') ?? '',
        end: localStorage.getItem('raceEnd') ?? ''
    })

    const [propositions, setProposition] = useState({
        start: [],
        end: []
    })

    const handleChange = (e) => {
        //On récupère le nom de l'input et sa valeur
        const name = e.target.name
        const value = e.target.value
        //On crée un nouvel objet state qui contient les infos de la course
        const state = { ...raceInfo }
        //On vérifie si la valeur de l'input est supérieur à 2 caractères
        if (value.length > 2) {
            //Si oui, on récupère les propositions de l'api
            axios.getAdress(value, { lat: location.location.lat, lng: location.location.lng })
                .then((res) => {
                    //On met à jour le state des propositions
                    setProposition({ ...propositions, [name]: res.data.features })
                })
        }
        //Si la valeur est inférieure à 3 caractères, on vide le state des propositions
        if (value.length < 3) {
            setProposition({ ...propositions, [name]: [] })
            if (name === "start") {
                location.removeStartMarker()
            } else {
                location.removeEndMarker()
            }
        }
        //On met à jour le state de la course
        state[name] = value
        setRaceInfo(state)
    }
    //Fonction qui permet de récupérer les infos de la suggestion à utiliser au clic
    const handleSuggestion = (e) => {
        const name = e.target.getAttribute("data-name")
        const value = e.target.getAttribute('data-label')
        const lat = e.target.getAttribute('data-lat')
        const lng = e.target.getAttribute('data-lng')
        const state = { ...raceInfo, [name]: value }
        setRaceInfo(state)
        const isStart = e.target.getAttribute('data-name') === 'start'
        if (isStart) {
            location.addStartMarker(lat, lng)
        } else {
            location.addEndMarker(lat, lng)
        }
    }

    return (
        <>
            <InputWrapper
                isStart={true}
                value={raceInfo.start}
                active={suggest.start}
                handleClick={handleSuggestion}
                toggleSuggest={toggleSuggest}
                change={handleChange}
                suggest={propositions.start}
            />
            <InputWrapper
                isStart={false}
                value={raceInfo.end}
                active={suggest.end}
                handleClick={handleSuggestion}
                toggleSuggest={toggleSuggest}
                change={handleChange}
                suggest={propositions.end}
            />
        </>
    )

}
export default RaceState