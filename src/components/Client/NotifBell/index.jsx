import { useSelector } from 'react-redux';
import { getUnreadNotificationsCount } from '../../../utils/store/Partner/selectors/NotifSelectors'


function NotificationBell({ onClick }) {
  const unreadCount = useSelector(getUnreadNotificationsCount);

  return (
    <button onClick={onClick} className="notification-bell">
      <i className="ph-bold ph-bell" />
      {unreadCount > 0 && (
        <span className="notification-badge">
          {unreadCount}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;