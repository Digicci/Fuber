import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchRaces = createAsyncThunk(
  'fetchRaces',
  async (api) => {
      return (await api.get('/entreprise/getRaces')).data
  }
)

const initialState = {
    auth: false,
    user: null,
    online: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.user = action.payload === null ? null : {...action.payload}
            state.auth = action.payload !== null
        },
        toggleOnline(state, action) {
            // TODO voir pour ajouter une popup expliquant pourquoi on ne laisse pas le driver se connecter
            if (state.user.prix && state.user.vehicule) {
                state.online = !state.online
            }
        },
        addVehicule(state,action) {
            state.user.vehicule = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRaces.fulfilled, (state,action) => {
            state.user.courses = action.payload
        })
    }
})

export const {
    setAuth,
  toggleOnline,
  addVehicule
} = authSlice.actions

export default authSlice.reducer