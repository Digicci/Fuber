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
    RacePrice
} from './atoms'
import { getAuth, getAuthStatus } from '../../../utils/store/Partner/selectors/AuthSelectors'
import { useSelector } from 'react-redux'

function OrderAccept() {

    const isConnected= useSelector(getAuth).auth
    const isOnline = useSelector(getAuthStatus)
    const [isOpen, setIsOpen] = useState(false)
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
                          <p>Vous êtes hors ligne</p>
                          :
                          <p>Vous êtes en ligne</p>
                    }
                </DivOnline>
                <Popup>
                    <TopOrder>
                        Vous avez reçu une nouvelle commande
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
                          </AcceptDiv>
                            <RacePrice>
                                10.30€
                            </RacePrice>
                        </InfoOrder>
                    </BottomOrder>
                </Popup>
            </Container>

        </>
    )
}

export default OrderAccept;