// import { getContactsThunk, loginThunk } from "./auth-thunk"

// const { createSlice, isAnyOf } = require("@reduxjs/toolkit")

// const initialState = {
// 	token: '',
// 	isLoading: false,
// 	error: '',
// 	contacts: null,
// }

// const handlePending = (state, { payload }) => {
// 	state.isLoading = true
// }
// const handleFulfilled = (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = ''
// 	state.token = payload.token
// }
// const handleRejected = (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = payload
// }

// const handleFulfilledContacts = (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = ''
// 	state.contacts = payload
// }


// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logOut(state) {
// 			state.profile = null
// 			state.access_token = ''
// 		},
//     },
//     extraReducers: 
//         (builder)=> {
//             builder
//                 // .addCase(loginThunk.pending, handlePending)
                
//                 .addCase(loginThunk.fulfilled, handleFulfilled)
//                 .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)

//                 .addMatcher(
// 				isAnyOf(loginThunk.pending, getContactsThunk.pending),
//                     handlePending)
                
//                 // .addCase(loginThunk.rejected, handleRejected)
//                 .addMatcher(
// 				isAnyOf(loginThunk.rejected, getContactsThunk.rejected),
// 				handleRejected
// 			)
//         }
//     },
// )

// export const {logOut} = authSlice.actions



import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth-services';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState, 
  extraReducers: (builder) => {
    builder
    .addCase(register.fulfilled, (state,action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logIn.fulfilled, (state,action)=> {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logOut.fulfilled, (state)=> {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, (state)=> {
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled,(state, action)=> {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state)=> {
      state.isRefreshing = false;
    })
  }
});
  // extraReducers: {
  //   [register.fulfilled]: (state, action) => {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.fulfilled]: (state, action) => {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logOut.fulfilled]: state => {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  //   [refreshUser.pending]: state => {
  //     state.isRefreshing = true;
  //   },
  //   [refreshUser.fulfilled]: (state, action) => {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //     state.isRefreshing = false;
  //   },
  //   [refreshUser.rejected]: state => {
  //     state.isRefreshing = false;
  //   },
  // },
 

export const authReducer = authSlice.reducer;