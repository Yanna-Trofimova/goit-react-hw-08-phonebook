import { configureStore } from '@reduxjs/toolkit'
import { contactApi } from './items'
import { filterSlice } from './filter'
// import { contactsReducer, contactsSlice } from './items'


export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        filter: filterSlice.reducer
    },
    middleware: getDefaultMiddleware =>[
      ...getDefaultMiddleware(),
        contactApi.middleware],
     
    
});
