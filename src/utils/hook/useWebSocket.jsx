import {Manager} from 'socket.io-client';
import {createContext, useContext} from "react";
import { SOCKET_URL } from "../../config";

const socketManager = new Manager(SOCKET_URL, {
    autoConnect: false,
    reconnection: true,
    reconnectionDelayMax: 10000,
})

// Les namespaces exigent desormais un JWT : l'identite du chauffeur et du
// client est derivee du token cote serveur, plus du payload des evenements.
const withAuth = (namespace, tokenKey) => {
    const socket = socketManager.socket(namespace)
    socket.on('connect_error', (err) => {
        console.error(`socket ${namespace}:`, err.message)
    })
    // Le token est relu a chaque (re)connexion, pour suivre les rafraichissements.
    socket.auth = (cb) => cb({token: localStorage.getItem(tokenKey)})
    return socket
}

const driverSocket = withAuth('/driver', 'driver_token')
const userSocket = withAuth('/user', 'user_token')

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

    const connectDriver = () => {
        driverSocket.connect()
        driverSocket.on('connect', () => {
            // Plus besoin de transmettre driverId : le serveur le lit dans le token.
            driverSocket.emit('getOnline', {}, (connectionStatus) => {
            })
        })
    }

    const disconnectDriver = () => {
        driverSocket.disconnect()
        driverSocket.on('disconnect', () => {
        })
    }

    const driverUpdateLocation = (location) => {
        driverSocket.emit('location:change', {location}, (data) => {
        })
    }

    const connectUser = () => {
        userSocket.connect()
        userSocket.on('connect', () => {
        })
    }
    
    /**
     * Emmet l'évènement race:request sur la websocket user
     * @param raceInfo
     * @return {void}
     */
    const requestRace = (raceInfo) => {
        userSocket.emit('race:request', {raceInfo}, (data) => {
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