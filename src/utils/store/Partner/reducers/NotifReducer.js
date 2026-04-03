import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items : [],
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.items.unshift({
        id: action.payload.id,
        title: action.payload.title || 'Notification',
        message: action.payload.message || '' ,
        type: action.payload.type || 'info',
        read: false,
        createdAt: action.payload.createdAt,
      });
    },
    removeNotification: (state,action) => {
      state.items = state.items.filter((notif) => notif.id !== action.payload);
    },
    clearNotifications: (state) => {
      state.items = [];
    },
    markAsRead: (state, action) => {
      const notif = state.items.find((n) => n.id === action.payload);
      if (notif) {
        notif.read = true;
      }
    },

    markAllAsRead: (state) => {
      state.items = state.items.map((notif) => ({
        ...notif,
        read: true,
      }));
    },
    setNotifications: (state, action) => {
      state.items = action.payload
    }
  }
});

export const {
  addNotification,
  removeNotification,
  clearNotifications,
  markAsRead,
  markAllAsRead,
 setNotifications
} = notificationSlice.actions;

export default notificationSlice.reducer;