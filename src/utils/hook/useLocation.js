import React, { useState, createContext, useContext, useEffect } from "react"
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'lrm-google'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import {useRace} from "./Client/useRace";

const locationContext = createContext()

export function ProvideLocation({ children }) {
    const location = useProvideLocation()
    return <locationContext.Provider value={location}>{children}</locationContext.Provider>
}

export const useLocation = () => {
    return useContext(locationContext)
}

function useProvideLocation() {
    //Trajet sélectionné ?
    const [asJourney, setAsJourney] = useState(false)
    //Localisation de l'utilisateur
    const [location, setLocation] = useState({lng: 0, lat: 0})
    //Marker de la localisation de l'utilisateur
    const [locationMarker, setLocationMarker] = useState(null)
    //Marker de départ
    const [startMarker, setStartMarker] = useState(null)
    //Objet trajet
    const [journey, setJourney] = useState(null)
    //Marker d'arrivée
    const [endMarker, setEndMarker] = useState(null)
    //Booléen de chargement de la localisation
    const [locationLoad, setLocationLoad] = useState(true)
    //Id du setTimeout de tracking
    const [trackerId, setTrackerId] = useState(0)
    //Map
    const [map, setMap] = useState(null)
    //Icone de départ
    const flagPath = './assets/ressources/flag.svg'
    //Icone d'arrivée
    const flagOutlinePath = './assets/ressources/flag-outline.svg'

    const race = useRace()
    const {unsetRace} = useRace()

    //Fonction de tracking de la localisation de l'utilisateur
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

    //Fonction de déstruction de la map
    const destroyMap = () => {
        if (map) {
            map.remove()
        }
    }

    //Arret du tracking
    const unsetTrack = () => {
        clearTimeout(trackerId)
        setMap(null)
        setLocationLoad(true)
    }

    //Fonction de création de la map
    const getMap = (id) => {
        if (id) {
            const map = L.map(id).setView([location.lat, location.lng], 13);
            setMap(map)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            }).addTo(map);

            const marker = L.marker([location.lat, location.lng]).addTo(map);
            setLocationMarker(marker)
            unsetRace()
        }
        return false
    }

    //Fonction de création du marker de départ
    const addStartMarker = (lat, lng) => {
        const icon = L.icon({
            iconUrl: flagOutlinePath,
            iconSize: [25, 25],
            iconAnchor: [12, 25],
        })
        const startMarkerState = L.marker([lat, lng], {icon: icon}).addTo(map);
        map.setView([lat, lng], 13)
        locationMarker.remove()
        removeStartMarker()
        setStartMarker(startMarkerState)
        race.setRace('startLngLat', {lat, lng})
        if (endMarker) {
            createJourney()
        }
    }

    //Fonction de création du marker d'arrivée
    const addEndMarker = (lat, lng) => {
        const icon = L.icon({
            iconUrl: flagPath,
            iconSize: [25, 25],
            iconAnchor: [12, 25],
        })
        const endMarkerState = L.marker([lat, lng], {icon: icon}).addTo(map);
        removeEndMarker()
        setEndMarker(endMarkerState)
        race.setRace('endLngLat', {lat, lng})
        if (startMarker) {
            createJourney()
        }
    }

    //Fonction de suppression du marker de départ
    const removeStartMarker = () => {
        if (startMarker) {
            startMarker.remove()
            setStartMarker(null)
            race.setRace('startLngLat', null)
            if (!endMarker) {
                locationMarker.addTo(map)
            }
        }
    }

    //Fonction de suppression du marker d'arrivée
    const removeEndMarker = () => {
        if (endMarker) {
            endMarker.remove()
            setEndMarker(null)
            race.setRace('endLngLat', null)
            if (!startMarker) {
                locationMarker.addTo(map)
            }
        }
    }

    //Fonction de création du trajet
    const createJourney = () => {
        console.log({action: 'createJourney', race: race.raceInfo})
        //Si les deux markers sont présents
        if (race.raceInfo.startLngLat.lat !== 0 && race.raceInfo.endLngLat.lat !== 0) {
            //On supprime le trajet s'il existe
            if (journey) {
                journey.remove()
            }
            //On crée le trajet et on ajoute un listener sur la fin du chargement du trajet
            const polyline = L.Routing.control({
                waypoints : [
                    L.latLng(race.raceInfo.startLngLat.lat, race.raceInfo.startLngLat.lng),
                    L.latLng(race.raceInfo.endLngLat.lat, race.raceInfo.endLngLat.lng),
                ],
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            opacity: 0.5,
                            weight: 3
                        }
                    ]
                },
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
            }).on('routesfound', function(e) {
                const meters = e.routes[0].summary.totalDistance
                const km = meters / 1000
                race.setRace('dist',parseFloat(km.toFixed(2)))
                setAsJourney(true)
            })
            //On change la langue du trajet
            polyline.getRouter().options.language = 'fr'
            //On ajoute le trajet à la map
            polyline.addTo(map)
            //On enregistre l'objet de trajet et on supprime les markers de départ et d'arrivée
            setJourney(polyline)
            startMarker.remove()
            endMarker.remove()
        } else {
            //Si les deux markers ne sont pas présents, on supprime le trajet
            removeJourney()
            setAsJourney(false)
        }
    }

    //Fonction de suppression du trajet
    const removeJourney = () => {
        if (journey) {
            journey.remove()
            setJourney(null)
            if (startMarker) {
                startMarker.addTo(map)
            }
            else if (endMarker) {
                endMarker.addTo(map)
            }
        }
    }

    useEffect(() => {
        createJourney()
    }, [race.raceInfo.startLngLat.lat, race.raceInfo.endLngLat.lat])

    return {
        location,
        locationLoad,
        map,
        asJourney,
        setTrack,
        unsetTrack,
        getMap,
        addStartMarker,
        addEndMarker,
        removeEndMarker,
        removeStartMarker,
        destroyMap
    }
}