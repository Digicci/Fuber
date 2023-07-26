import React, { useState } from 'react'
import {
    Container,
    Connexion,
} from './atoms'

function Online() {

    const [isOnline, setIsOnline] = useState(false)
    const toggleOnline = () => {
        setIsOnline(!isOnline)
    }
    return (
        <>
            <Container>
                <Connexion>
                    <label>
                        <input type="checkbox" onClick={toggleOnline} />
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
