import { useSelector } from 'react-redux';
import { getUnreadNotificationsCount } from '../../../utils/store/Partner/selectors/NotifSelectors'
import {
  NotificationBellButton,
  NotificationBadge,
} from './atoms'


function NotificationBell({ onClick }) {
  const unreadCount = useSelector(getUnreadNotificationsCount);

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