import { configureStore } from '@reduxjs/toolkit'
// import { contactApi } from './contacts/items'
import { filterReducer } from './filter/filter'
import { authReducer } from './auth/auth-slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phonebookReducer } from './contacts/contact-slice';
import storage from 'redux-persist/lib/storage';
// import { contactsReducer, contactsSlice } from './items'


// export const store = configureStore({
//     reducer: {
//         [contactApi.reducerPath]: contactApi.reducer,
//         filter: filterSlice.reducer,
//         auth: authSlice.reducer
//     },
//     middleware: getDefaultMiddleware =>[
//       ...getDefaultMiddleware(),
//         contactApi.middleware],
     
    
// });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      devTools: process.env.NODE_ENV === 'development',
    }),
});

export const persistor = persistStore(store);
