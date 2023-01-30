import React, {useState} from "react";
import InputWrapper from "../InputWrapper";
import { useAxios } from "../../../utils/hook/useAxios";
import { useLocation } from "../../../utils/hook/useLocation";

function RaceState(){

    const [suggest, setSuggest] = useState({
        start: false,
        end: false
    })
    const toggleSuggest = (name) => {
        const state = {...suggest}
        state[name] = !state[name]
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
        const name = e.target.name
        const value = e.target.value
        const state = { ...raceInfo }
        if (value.length > 2) {
            axios.getAdress(value, { lat: location.location.lat, lng: location.location.lng })
                .then((res) => {
                    setProposition({ ...propositions, [name]: res.data.features })
                })
        }
        if (value.length < 3) {
            setProposition({ ...propositions, [name]: [] })
        }
        state[name] = value
        setRaceInfo(state)
    }

    return (
        <>
            <InputWrapper isStart={true} value={raceInfo.start} active={suggest.start} toggleSuggest={toggleSuggest} change={handleChange} suggest={propositions.start}/>
            <InputWrapper isStart={false} value={raceInfo.end} active={suggest.end} toggleSuggest={toggleSuggest} change={handleChange} suggest={propositions.end}/>
        </>
    )

}
export default RaceState