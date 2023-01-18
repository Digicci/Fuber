import React, {useEffect} from "react"
import {useLocation} from "../../utils/hook/useLocation";
import styled from "styled-components";

const Location = styled.div`
    width: 500px;
    height: 491px;
    @media (max-width:768px){
        width: 100%;
        height: 400px;
    }
`

function Map() {

    const location = useLocation()

    useEffect(() => {
        location.setTrack()
        return () => {
            location.unsetTrack()
        }
    }, [])

    useEffect(() => {
        const mapContainer = document.getElementById('map')

        if (mapContainer && !location.map && !location.locationLoad) {
            location.getMap('map')
        }
    }, [location.locationLoad, location.location])

    return (
        <div>
            {
                location.locationLoad ? <div>Loading...</div> : <Location id='map'></Location>
            }
        </div>
    )
}

export default Map