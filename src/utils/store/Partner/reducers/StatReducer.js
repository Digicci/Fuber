const basePath = "entreprise/stats"

export const GET_STATS = "GET_STATS";


const initialState = {
    numberOfRace: 0,
    ca: 0
}

const statReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATS:
            action.payload.axios.get(
                `${basePath}/getNumberOfRace`,
                { withCredentials: true }
            ).then((res) => {
                const {count} = res.data;
                action.payload.axios.get(
                    `${basePath}/getCa`,
                    { withCredentials: true }
                ).then((res) => {
                    const {ca} = res.data
                    return ({
                        ...state,
                        numberOfRace: count,
                        ca
                    })
                })
            })
            return state;

        default:
            return state;
    }
}

export default statReducer;