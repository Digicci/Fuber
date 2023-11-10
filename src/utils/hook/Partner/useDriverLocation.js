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
                console.log(error)
                if(error.code === 1) {
                    alert('Merci d\'activer la localisation pour utiliser l\'application')
                } else if(error.code === 2) {
                    alert('La localisation n\'est pas disponible')
                } else if(error.code === 3) {
                    console.log('La localisation a pris trop de temps')
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

