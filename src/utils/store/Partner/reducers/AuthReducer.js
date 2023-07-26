
export const SET_AUTH = "SET_AUTH";

const initialState = {
    auth: false,
    token: null,
    user: null,
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_AUTH:
            return {
                ...state,
                user: {...action.payload},
                auth: action.payload !== null,
            }

        default:
            return state;
    }
}

export default AuthReducer;