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
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        title: action.payload.title || 'Notifaction',
        message: action.payload.message || '' ,
        type: action.payload.type || 'info',
        read: false,
        createdAt: new Date().toISOString(),
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
  }
});

export const {
  addNotification,
  removeNotification,
  clearNotifications,
  markAsRead,
  markAllAsRead,
} = notificationSlice.actions;

export default notificationSlice.reducer;