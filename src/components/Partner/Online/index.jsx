import React from 'react'
import {
    Container,
    Connexion,
} from './atoms'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthStatus } from '../../../utils/store/Partner/selectors/AuthSelectors'
import { toggleOnline } from '../../../utils/store/Partner/actions/AuthActions'

function Online() {

   const isOnline = useSelector(getAuthStatus)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(toggleOnline())
    }
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
