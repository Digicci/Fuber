
import { SET_TEAM, SELECT_EMPLOYEE } from "../reducers/TeamReducer";

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