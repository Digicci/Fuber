
export const SET_AUTH = "SET_AUTH";
export const TOGGLE_ONLINE = "TOGGLE_ONLINE";

const initialState = {
    auth: false,
    user: null,
    online: false,
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_AUTH:
            return {
                ...state,
                user: action.payload === null ? null : { ...action.payload},
                auth: action.payload !== null,
            }
            
        case TOGGLE_ONLINE:
            return {
                ...state,
                online: !state.online,
            }

        default:
            return state;
    }
}

export default AuthReducer;