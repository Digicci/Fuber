import { useDispatch, useSelector } from 'react-redux'
import { getNotifications } from '../../../utils/store/Partner/selectors/NotifSelectors'
import { clearNotifications, markAsRead, removeNotification } from '../../../utils/store/Partner/reducers/NotifReducer'
import {
  NotificationPanelContainer,
  NotificationPanelHeader,
  NotificationTitle,
  NotificationClearButton,
  NotificationPanelBody,
  NotificationItem,
  NotificationContent,
  NotificationItemTitle,
  NotificationMessage,
  NotificationDate,
  NotificationDeleteButton,
  NotificationEmpty,
} from './atoms'


function NotifPanel(){
  const dispatch = useDispatch();
  const notifications = useSelector(getNotifications);
  const clear = () => dispatch(clearNotifications());

  return (
    <NotificationPanelContainer>
      <NotificationPanelHeader>
        <NotificationTitle>Notifications</NotificationTitle>

        {notifications.length > 0 && (
          <NotificationClearButton onClick={clear}>
            Tout supprimer
          </NotificationClearButton>
        )}
      </NotificationPanelHeader>

      <NotificationPanelBody>
        {notifications.length === 0 ? (
          <NotificationEmpty>Aucune notification</NotificationEmpty>
        ) : (
          notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              $read={notif.read}
              onClick={() => dispatch(markAsRead(notif.id))}
            >
              <NotificationContent>
                <NotificationItemTitle>{notif.title}</NotificationItemTitle>
                <NotificationMessage>{notif.message}</NotificationMessage>
                <NotificationDate>
                  {new Date(notif.createdAt).toLocaleString()}
                </NotificationDate>
              </NotificationContent>

              <NotificationDeleteButton
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(removeNotification(notif.id));
                }}
              >
                Supprimer
              </NotificationDeleteButton>
            </NotificationItem>
          ))
        )}
      </NotificationPanelBody>
    </NotificationPanelContainer>
  );
}

export default NotifPanel;