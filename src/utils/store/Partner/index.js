import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import StatReducer from "./reducers/StatReducer";
import AuthReducer from "./reducers/AuthReducer";




const store = createStore(
    combineReducers({
        stats: StatReducer,
        auth: AuthReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store