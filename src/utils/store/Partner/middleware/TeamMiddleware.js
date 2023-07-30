import {SET_AUTH} from "../reducers/AuthReducer";
import {setTeam} from "../actions/AuthActions";


const TeamMiddleware = store => next => action => {
    const response = next(action)

    switch (action.type) {

        case SET_AUTH:
            if (action.payload !== null) {
                store.dispatch(setTeam(action.payload.employes))
            } else {
                store.dispatch(setTeam([]))
            }
            break;

        default:
            break;
    }
    return response
}

export default TeamMiddleware;