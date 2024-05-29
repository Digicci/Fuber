import React, {useEffect} from 'react'
import {
    Container,
    Connexion,
} from './atoms'
import { useDispatch, useSelector } from 'react-redux'
import {getAuthStatus, getDriverId} from '../../../utils/store/Partner/selectors/AuthSelectors'
import { toggleOnline } from '../../../utils/store/Partner/actions/AuthActions'
import { useSocket } from "../../../utils/hook/useWebSocket";
import { useDriverLocation } from "../../../utils/hook/Partner/useDriverLocation";

function Online() {

    const isOnline = useSelector(getAuthStatus)
    const driverId = useSelector(getDriverId)
    const dispatch = useDispatch()
    const {connectDriver, disconnectDriver, driverUpdateLocation} = useSocket()
    const {location, setTracker, destroyTracker} = useDriverLocation()

    const toggle = () => {
        dispatch(toggleOnline())
    }

    // useEffect de connexion a la webSocket pour les drivers en ligne
    useEffect(() => {
        if (isOnline) {
            connectDriver(driverId)
            setTracker()
        } else {
            disconnectDriver()
            destroyTracker()
        }
    }, [isOnline])

    useEffect(() => {
        if(isOnline) {
            driverUpdateLocation(location)
        }
    }, [location])

    return (
        <>
            <Container>
                <Connexion>
                    <label>
                        <input type="checkbox" onChange={toggle} checked={isOnline} />
                        <span></span>
                    </label>
                    {
                        isOnline ?
                          <p className="txton">
                              En ligne
                          </p>
                          :
                          <p className="txtoff">
                              Hors ligne
                          </p>
                    }
                </Connexion>
            </Container>
        </>
    )
}

export default Online;
