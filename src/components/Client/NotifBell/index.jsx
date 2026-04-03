import {useDispatch, useSelector} from 'react-redux';
import { getUnreadNotificationsCount } from '../../../utils/store/Partner/selectors/NotifSelectors'
import {
  NotificationBellButton,
  NotificationBadge,
} from './atoms'
import {useEffect} from "react";
import {setNotifications} from "../../../utils/store/Partner/reducers/NotifReducer";
import {useAxios} from "../../../utils/hook/useAxios";


function NotificationBell({ onClick }) {
  const unreadCount = useSelector(getUnreadNotificationsCount);
  const axios = useAxios()
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("/user/notification")
     .then((data) => {
       dispatch(setNotifications(data.data))
     })
     .catch((err) => {
       console.error(err)
     })
  }, [])
  
  return (
    <NotificationBellButton type="button" onClick={onClick}>
      <i className="ph-bold ph-bell" />
      {unreadCount > 0 && (
        <NotificationBadge>{unreadCount}</NotificationBadge>
      )}
    </NotificationBellButton>
  );
};

export default NotificationBell;