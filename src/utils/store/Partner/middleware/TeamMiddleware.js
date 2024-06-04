import {setAuth} from "../reducers/AuthReducer";
import {setTeam} from "../actions/AuthActions";


const TeamMiddleware = store => next => action => {
    const response = next(action)

    switch (action.type) {

        case setAuth.toString():
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