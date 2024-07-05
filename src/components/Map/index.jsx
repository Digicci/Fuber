import React, {useEffect} from "react"
import {useLocation} from "../../utils/hook/useLocation";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";

const Location = styled.div`
  width: 500px;
  height: 491px;
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`

const Loading = styled.div`
  width: 500px;
  height: 491px;
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

function Map() {

    const location = useLocation()

    useEffect(() => {
        location.setTrack()
        console.log("mount map")
        return () => {
            console.log("unmount map")
            location.unsetTrack()
            location.destroyMap()
        }
    }, [])

    useEffect(() => {
        const mapContainer = document.getElementById('map')

        if (mapContainer && !location.map && !location.locationLoad) {
            console.log("launch map creation", location.map)
            location.getMap('map')
        }
        console.log(location)
    }, [location.locationLoad, location.location])

    return (
        <div>
            {
                location.locationLoad ? <Loading><Loader/></Loading> : <Location id='map'></Location>
            }
        </div>
    )
}

export default Map