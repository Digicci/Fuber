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

function OrderAccept() {

    const isConnected= useSelector(getAuth).auth
    const isOnline = useSelector(getAuthStatus)
    const [isOpen, setIsOpen] = useState(false)
    const {driverSocket} = useSocket()
    const [hasNewOrder, setHasNewOrder] = useState(false)

    driverSocket.on("race:request", (data) => {
        console.log(data)
    })

    const toggle = () => {
        setIsOpen(!isOpen)
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
                            hasNewOrder ? 'Vous avez reçu une nouvelle commande' : "Auncune commande pour le moment"
                        }
                        <MpOrder>
                            {
                                !isOpen ?
                                  <button onClick={toggle}><i className="ph-bold ph-minus-circle"></i></button>
                                  :
                                  <button onClick={toggle}><i className="ph-bold ph-plus-circle"></i></button>
                            }
                        </MpOrder>
                    </TopOrder>
                    <BottomOrder $open={isOpen}>
                        <InfoOrder>
                          <AcceptDiv>
                            <AcceptButton>Accepter</AcceptButton>
                            <RefuseButton>Refuser</RefuseButton>
                            <RacePrice>10.30€</RacePrice>
                          </AcceptDiv>
                            <RaceInfo>
                                <p>
                                    <i className="ph-bold ph-clock"></i>
                                    10 min
                                </p>
                                <ul>
                                    <li>
                                        <i className="ph-bold ph-map-pin"></i>
                                        adresse de départ
                                    </li>
                                    <li>
                                        <i className="ph-bold ph-crosshair"></i>
                                        adresse d'arrivée
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