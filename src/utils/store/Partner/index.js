import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import StatReducer from "./reducers/StatReducer";
import AuthReducer from "./reducers/AuthReducer";
import TeamReducer from "./reducers/TeamReducer";
import TeamMiddleware from "./middleware/TeamMiddleware";




const store = createStore(
    combineReducers({
        stats: StatReducer,
        auth: AuthReducer,
        team: TeamReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk, TeamMiddleware)
    )
)

export default store