import { SET_AUTH } from "../reducers/AuthReducer";

export const setAuth = (auth) => {
    return {
        type: SET_AUTH,
        payload: auth === null ? null : { ...auth}
    }
}