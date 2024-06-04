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
            state.online = !state.online
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
  toggleOnline
} = authSlice.actions

export default authSlice.reducer