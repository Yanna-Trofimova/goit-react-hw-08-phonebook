import { configureStore } from '@reduxjs/toolkit'
import { contactApi } from './items'
import { filterSlice } from './filter'
import {authSlice} from './auth/auth-slice'
// import { contactsReducer, contactsSlice } from './items'


export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        filter: filterSlice.reducer,
        auth: authSlice.reducer
    },
    middleware: getDefaultMiddleware =>[
      ...getDefaultMiddleware(),
        contactApi.middleware],
     
    
});
