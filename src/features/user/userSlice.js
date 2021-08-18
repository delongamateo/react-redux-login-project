import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    status: "idle",
    error: null,
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
        updateName: (state, action) => {
            state.user.user.name = action.payload
        },
        updateSurname: (state, action) => {
            state.user.user.surname = action.payload
        },
        updateUsername: (state, action) => {
            state.user.user.displayName = action.payload
        },
        deleteUsername: (state) => {
            state.user.user.displayName = ""
        },
        updateAddress: (state, action) => {
            state.user.user.contact.locations[0].address.streetName = action.payload
        },
        updateAddressNumber: (state, action) => {
            state.user.user.contact.locations[0].address.streetNumber = action.payload
        },
        updateCity: (state, action) => {
            state.user.user.contact.locations[0].address.suburb = action.payload
        },
        deleteCity: (state) => {
            state.user.user.contact.locations[0].address.suburb = ""
        },
        updatePostalCode: (state, action) => {
            state.user.user.contact.locations[0].address.postalCode = action.payload
        },
        deletePostalCode: (state) => {
            state.user.user.contact.locations[0].address.postalCode = ""
        },
        updateEmail: (state, action) => {
            state.user.user.contact.email = action.payload
        },
        deleteEmail: (state) => {
            state.user.user.contact.email = ""
        },
        updatePhone: (state, action) => {
            state.user.user.contact.phoneNumber = action.payload
        },
        deletePhone: (state) => {
            state.user.user.contact.phoneNumber = ""
        },
        updateSocialMedia: (state, action) => {
            state.user.user.contact.socialNetworks[0].name = action.payload
        },
        deleteSocialMedia: (state) => {
            state.user.user.contact.socialNetworks[0].name = ""
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


export const {updateName, updateSurname, updateUsername, deleteUsername, updateAddress, updateAddressNumber, updateCity, deleteCity, updatePostalCode, deletePostalCode, updateEmail, deleteEmail, updatePhone, deletePhone, updateSocialMedia, deleteSocialMedia} = userSlice.actions
export default userSlice.reducer