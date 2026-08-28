import {createContext, useContext, useState} from "react";

const driverLocationContext = createContext();

export const DriverLocationProvider = ({children}) => {
    const context = useProvideDriverLocation();
    return (
        <driverLocationContext.Provider value={context}>
            {children}
        </driverLocationContext.Provider>
    )
}

export const useDriverLocation = () => {
    return useContext(driverLocationContext)
}

const useProvideDriverLocation = () => {
    const [location, setLocation] = useState({lng: undefined, lat: undefined})
    const [trackerId, setTrackerId] = useState(0)
    const setTracker = () => {
        const tracker = navigator.geolocation.watchPosition(
            trackerCallback,
            (error) => {
                if(error.code === 1) {
                    alert('Merci d\'activer la localisation pour utiliser l\'application')
                } else if(error.code === 2) {
                    alert('La localisation n\'est pas disponible')
                } else if(error.code === 3) {
                    alert('La localisation a expiré, merci de réessayer')
                }
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0
            }
        )
        setTrackerId(tracker)
    }

    const destroyTracker = () => {
        navigator.geolocation.clearWatch(trackerId)
        setTrackerId(0)
    }

    const trackerCallback = (position) => {
        setLocation({
            lng: position.coords.longitude,
            lat: position.coords.latitude
        })
    }

    return {
        location,
        setTracker,
        destroyTracker
    }
}

