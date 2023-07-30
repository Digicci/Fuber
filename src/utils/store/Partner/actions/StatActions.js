import { SET_STATS } from "../reducers/StatReducer";

export const updateStats = (payload) => {
    return {
        type: SET_STATS,
        payload
    }
}