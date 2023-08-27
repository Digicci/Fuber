import { SET_AUTH, TOGGLE_ONLINE } from "../reducers/AuthReducer";
import { SET_TEAM, SELECT_EMPLOYEE } from "../reducers/TeamReducer";

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

export const setTeam = (team) => {
    return {
        type: SET_TEAM,
        payload: team,
    }
}

export const selectEmployee = (employee) => {
    return {
        type: SELECT_EMPLOYEE,
        payload: employee,
    }
}