import {useDispatch, useSelector} from 'react-redux';
import { getUnreadNotificationsCount } from '../../../utils/store/Partner/selectors/NotifSelectors'
import {
  NotificationBellButton,
  NotificationBadge,
} from './atoms'
import {useEffect} from "react";
import {setNotifications} from "../../../utils/store/Partner/reducers/NotifReducer";
import {useAxios} from "../../../utils/hook/useAxios";
import {USER_TYPES} from '../../../utils/constants/userTypes'

function NotificationBell({ onClick, userType= USER_TYPES.CLIENT, dark=false}) {
  const unreadCount = useSelector(getUnreadNotificationsCount);
  const axios = useAxios()
  const dispatch = useDispatch();

  const notifUrl = userType === USER_TYPES.CLIENT ? '/user/notification' : '';
  useEffect(() => {
    axios.get(notifUrl)
     .then((data) => {
       dispatch(setNotifications(data.data))
     })
     .catch((err) => {
       console.error(err)
     })
  }, [])
  
  return (
    <NotificationBellButton $dark={dark} type="button" onClick={onClick}>
      <i className="ph-bold ph-bell" />
      {unreadCount > 0 && (
        <NotificationBadge>{unreadCount}</NotificationBadge>
      )}
    </NotificationBellButton>
  );
};

export default NotificationBell;