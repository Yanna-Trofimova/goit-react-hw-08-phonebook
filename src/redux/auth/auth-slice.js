import { getContactsThunk, loginThunk } from "./auth-thunk"

const { createSlice, isAnyOf } = require("@reduxjs/toolkit")

const initialState = {
	token: '',
	isLoading: false,
	error: '',
	contacts: null,
}

const handlePending = (state, { payload }) => {
	state.isLoading = true
}
const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.error = ''
	state.token = payload.token
}
const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const handleFulfilledContacts = (state, { payload }) => {
	state.isLoading = false
	state.error = ''
	state.contacts = payload
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
			state.profile = null
			state.access_token = ''
		},
    },
    extraReducers: 
        (builder)=> {
            builder
                // .addCase(loginThunk.pending, handlePending)
                
                .addCase(loginThunk.fulfilled, handleFulfilled)
                .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)

                .addMatcher(
				isAnyOf(loginThunk.pending, getContactsThunk.pending),
                    handlePending)
                
                // .addCase(loginThunk.rejected, handleRejected)
                .addMatcher(
				isAnyOf(loginThunk.rejected, getContactsThunk.rejected),
				handleRejected
			)
        }
    },
)

export const {logOut} = authSlice.actions