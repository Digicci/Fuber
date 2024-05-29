import {Manager} from 'socket.io-client';
import {createContext, useContext} from "react";
import {useSelector} from "react-redux";
import { getDriverId } from "../store/Partner/selectors/AuthSelectors";

const socketManager = new Manager('http://localhost:1000', {
    autoConnect: false,
    reconnection: true,
    reconnectionDelayMax: 10000,
})

const driverSocket = socketManager.socket('/driver')
const userSocket = socketManager.socket('/user')

const SocketContext = createContext({})

export const SocketProvider = ({children}) => {
    const context = useProvideSocket()
    return (
        <SocketContext.Provider value={context}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    return useContext(SocketContext)
}

const useProvideSocket = () => {

    const connectDriver = (driverId) => {
        driverSocket.connect()
        driverSocket.on('connect', () => {
            driverSocket.emit('getOnline', {driverId}, (connectionStatus) => {
                console.log(connectionStatus)
            })
        })
    }

    const disconnectDriver = () => {
        driverSocket.disconnect()
        driverSocket.on('disconnect', () => {
            console.log('driver disconnected')
        })
    }

    const driverUpdateLocation = (location) => {
        driverSocket.emit('location:change', {location}, (data) => {
            console.log(data)
        })
    }

    const connectUser = () => {
        userSocket.connect()
        userSocket.on('connect', () => {
            console.log('user connected')
        })
    }
    
    /**
     * Emmet l'évènement race:request sur la websocket user
     * @param raceInfo
     * @return {void}
     */
    const requestRace = (raceInfo) => {
        userSocket.emit('race:request', {raceInfo}, (data) => {
          console.log(data)
        })
    }


    return {
        connectDriver,
        disconnectDriver,
        driverUpdateLocation,
        connectUser,
        requestRace,
        driverSocket
    }
}