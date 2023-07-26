import { SET_AUTH, TOGGLE_ONLINE } from "../reducers/AuthReducer";

export const setAuth = (auth) => {
    return {
        type: SET_AUTH,
        payload: auth === null ? null : { ...auth}
    }
}

export const toggleOnline = () => {
    return {
        type: TOGGLE_ONLINE,
    }
}