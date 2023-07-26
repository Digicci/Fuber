import { GET_STATS } from "../reducers/StatReducer";

export const updateStats = (axios) => {
    return {
        type: GET_STATS,
        payload: {
            axios
        }
    }
}