import { useDispatch, useSelector } from 'react-redux'
import { getNotifications } from '../../../utils/store/Partner/selectors/NotifSelectors'
import {
  clearNotifications,
  markAsRead,
  removeNotification
} from '../../../utils/store/Partner/reducers/NotifReducer'
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
import {useAxios} from "../../../utils/hook/useAxios";


function NotifPanel(){
  const dispatch = useDispatch();
  const axios = useAxios()
  const notifications = useSelector(getNotifications);
  const clear = () => {
    axios.del("/user/notification/delete")
     .then(data => {
       if (data.data === "done") {
         dispatch(clearNotifications());
       }
     })
  }
  const handleReadClick = (id) => {
    axios.put(`/user/notification/${id}/markAsRead`)
     .then((data) => {
       if (data.data.read) {
         dispatch(markAsRead(id))
       }
     })
  }
  
  const handleDeleteNotification = (id) => {
    axios.del(`/user/notification/${id}/delete`)
     .then(data => {
       if (data.data) {
         dispatch(removeNotification(data.data))
       }
     })
  }

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
              onClick={() => handleReadClick(notif.id)}
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
                  handleDeleteNotification(notif.id)
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