import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    status: "idle",
    error: null
}

//fetching data from json file
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await fetch(`./data.json`)
    const data = await response.json()
    return data

})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateCity: (state, action) => {
            state.user.user.contact.locations[0].address.suburb = action.payload
        },

    },
    extraReducers: {
            [fetchUser.pending]: (state, action) => {
                state.status = 'loading'
            },
            [fetchUser.fulfilled]: (state, action) => {
                state.status = 'succeeded'
                //add fetched data to state
                state.user = action.payload
            },
            [fetchUser.rejected]: (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }
        }
});


export const {updateCity, update} = userSlice.actions
export default userSlice.reducer