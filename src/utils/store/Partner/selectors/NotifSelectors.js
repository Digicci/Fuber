export const getNotifications = (state) => state.notifications.items;

export const getUnreadNotificationsCount = (state) => state.notifications.items.filter((notif) => !notif.read).length;