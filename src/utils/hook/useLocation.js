import React, { useState, createContext, useContext } from "react"
import L from 'leaflet'

const locationContext = createContext()

export function ProvideLocation({ children }) {
    const location = useProvideLocation()
    return <locationContext.Provider value={location}>{children}</locationContext.Provider>
}

export const useLocation = () => {
    return useContext(locationContext)
}

function useProvideLocation() {
    const [location, setLocation] = useState({lng: 0, lat: 0})
    const [locationLoad, setLocationLoad] = useState(true)
    const [trackerId, setTrackerId] = useState(0)
    const [map, setMap] = useState(null)

    const setTrack = () => {
        const id = setTimeout(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
                setLocationLoad(false)
            })
        }, 5000)
        setTrackerId(id)
    }

    const unsetTrack = () => {
        clearTimeout(trackerId)
    }

    const getMap = (id) => {
        if (id) {
            const map = L.map(id).setView([location.lat, location.lng], 13);
            setMap(map)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([location.lat, location.lng]).addTo(map);
        }
        return false
    }

    return {
        location,
        locationLoad,
        map,
        setTrack,
        unsetTrack,
        getMap
    }
}