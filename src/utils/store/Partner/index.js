import {configureStore} from "@reduxjs/toolkit";

import StatReducer from "./reducers/StatReducer";
import AuthReducer from "./reducers/AuthReducer";
import TeamReducer from "./reducers/TeamReducer";
import TeamMiddleware from "./middleware/TeamMiddleware";
import NotifReducer from './reducers/NotifReducer'

const store = configureStore({
  reducer: {
    stats: StatReducer,
    auth: AuthReducer,
    team: TeamReducer,
    notifications: NotifReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend()
      .concat([
        TeamMiddleware
      ])
})

export default store