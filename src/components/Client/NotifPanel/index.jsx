import { useDispatch, useSelector } from 'react-redux'
import { getNotifications } from '../../../utils/store/Partner/selectors/NotifSelectors'
import { clearNotifications, markAsRead, removeNotification } from '../../../utils/store/Partner/reducers/NotifReducer'
import {Container} from './atoms'


function NotifPanel(){
  const dispatch = useDispatch();
  const notification = useSelector(getNotifications);
  const clear = () => dispatch(clearNotifications());

  return(
    <Container>
      <div>
        <h3>Notification</h3>
        {notification.length > 0 && (
          <button onClick={clear}>
            Tout supprimer
          </button>
        )}
      </div>

      <div>
        {notification.length === 0 ? (
          <p>Aucune notification</p>
        ) : (
          notification.map((notif) => (
            <div key={notif.id} onClick={() => dispatch(markAsRead(notif.id))}>
              <div>
                <strong>{notif.title}</strong>
                <p>{notif.message}</p>
                <small>{new Date(notif.createdAt).toLocaleString()}</small>
              </div>
              <button onClick={(e) => {e.stopPropagation(); dispatch(removeNotification(notif.id))}}>
                <i className="ph-bold ph-x"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

export default NotifPanel;