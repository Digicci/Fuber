import {configureStore} from "@reduxjs/toolkit";

import StatReducer from "./reducers/StatReducer";
import AuthReducer from "./reducers/AuthReducer";
import TeamReducer from "./reducers/TeamReducer";
import TeamMiddleware from "./middleware/TeamMiddleware";

const store = configureStore({
  reducer: {
    stats: StatReducer,
    auth: AuthReducer,
    team: TeamReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend()
      .concat([
        TeamMiddleware
      ])
})

export default store