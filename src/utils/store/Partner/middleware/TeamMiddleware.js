import {SET_AUTH} from "../reducers/AuthReducer";
import {setTeam} from "../actions/AuthActions";


const TeamMiddleware = store => next => action => {
    switch (action.type) {

        case SET_AUTH:
            if (action.payload !== null) {
                store.dispatch(setTeam(action.payload.employes))
            }
            break;

        default:
            break;
    }
    next(action)
}

export default TeamMiddleware;