
export const SET_TEAM = "SET_TEAM";

const initialState = {
    team: []
}

const TeamReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_TEAM:
            return {
                ...state,
                team: action.payload,
            }

        default:
            return state;
    }
}

export default TeamReducer;