export const SET_STATS = "SET_STATS";


const initialState = {
    numberOfRace: 0,
    ca: 0
}

const statReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATS:
            return {
                ...state,
                ...action.payload
            }


        default:
            return state;
    }
}

export default statReducer;