import React, {useState} from "react";
import {
    Container,
    DivOnline,
    Popup,
    TopOrder,
    MpOrder,
    BottomOrder,
    InfoOrder,
    AcceptDiv,
    AcceptButton,
    RefuseButton,
    RacePrice,
    RaceInfo
} from './atoms'
import { getAuth, getAuthStatus } from '../../../utils/store/Partner/selectors/AuthSelectors'
import { useSelector } from 'react-redux'
import {useSocket} from "../../../utils/hook/useWebSocket";
import driver from "../../../utils/Data/Client/Driver";

function OrderAccept() {

    const isConnected= useSelector(getAuth).auth
    const isOnline = useSelector(getAuthStatus)
    const [isOpen, setIsOpen] = useState(false)
    const {driverSocket} = useSocket()
    const [hasNewOrder, setHasNewOrder] = useState(false)
    const [order, setOrder] = useState({})

    driverSocket.on("race:request", (data) => {
        console.log(data)
        setHasNewOrder(true)
        setIsOpen(true)
        setOrder(data)
    })

    const acceptOrder = () => {
        driverSocket.emit('race:accept', order, (data) => {
            console.log(data)
        })
        raceIsViewed()
    }

    const refuseOrder = () => {
        driverSocket.emit("race:refuse", order, (data) => {
            console.log(data)
        })
        raceIsViewed()
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const raceIsViewed = () => {
        setHasNewOrder(false)
        setIsOpen(false)
    }

    if (!isConnected) return null
    return (
        <>
            <Container>
                <DivOnline>
                    {
                        isOnline ?
                          <p>Vous êtes en ligne</p>
                          :
                          <p>Vous êtes hors ligne</p>
                    }
                </DivOnline>
                <Popup>
                    <TopOrder>
                        {
                            hasNewOrder ? 'Vous avez reçu une nouvelle commande' : "Aucune commande pour le moment"
                        }
                        <MpOrder>
                            {
                                isOpen ?
                                  <button onClick={toggle}><i className="ph-bold ph-minus-circle"></i></button>
                                  :
                                    <button onClick={toggle} disabled={!hasNewOrder}><i className="ph-bold ph-plus-circle"></i></button>
                            }
                        </MpOrder>
                    </TopOrder>
                    <BottomOrder $open={isOpen}>
                        <InfoOrder>
                          <AcceptDiv>
                              {
                                    hasNewOrder && (
                                        <>
                                            <AcceptButton onClick={acceptOrder}>
                                                Accepter
                                            </AcceptButton>
                                            <RefuseButton onClick={refuseOrder}>
                                                Refuser
                                            </RefuseButton>
                                        </>
                                  )
                              }
                            <RacePrice>{order.driverPrice ? `${(order.driverPrice / 100).toFixed(2)} €` : '0 €'}</RacePrice>
                          </AcceptDiv>
                            <RaceInfo>
                                <p>
                                    <i className="ph-bold ph-clock"></i>
                                    10 min
                                </p>
                                <ul>
                                    <li>
                                        <i className="ph-bold ph-map-pin"></i>
                                        {order.start ? order.start : 'adresse de départ'}
                                    </li>
                                    <li>
                                        <i className="ph-bold ph-crosshair"></i>
                                        {order.end ? order.end : 'adresse d\'arrivée'}
                                    </li>
                                </ul>
                            </RaceInfo>
                        </InfoOrder>
                    </BottomOrder>
                </Popup>
            </Container>

        </>
    )
}

export default OrderAccept;