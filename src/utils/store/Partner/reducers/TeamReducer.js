
export const SET_TEAM = "SET_TEAM";

export const SELECT_EMPLOYEE = "SELECT_EMPLOYEE";

const initialState = {
    team: [],
    selectedEmployee: 0,
}

const TeamReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_TEAM:
            return {
                ...state,
                team: action.payload,
            }
        case SELECT_EMPLOYEE:
            return {
                ...state,
                selectedEmployee: action.payload,
            }
        default:
            return state;
    }
}

export default TeamReducer;