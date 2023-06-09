// import axios from 'axios'

// const instance = axios.create({
// 	baseURL: 'https://connections-api.herokuapp.com',
// })

// const setToken = (token) => {
// 	instance.defaults.headers.common['Authorization'] = token
// }

// export const dellToken = () => {
// 	delete instance.defaults.headers.common['Authorization']
// }

// export const signUp = async (body) => {
// 	return await instance.post('/users/signup', body)
// }

// export const login = async (body) => {
//     // return await publicInstance.post('/users/login', body)
// 	const { data } = await instance.post('/users/login', body)
// 	setToken(`Bearer ${data.token}`)
// 	return data
// }

// export const getProfile = async () => {
// 	const { data } = await instance('/contacts')
// 	return data
// }




import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// берем токен на бекенді
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// видаляємо токен
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    // credentials - відправляються дані з форми
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/users/signup', credentials);
        // додаємо токен до запиту
        setAuthHeader(response.data.token);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/singup', credentials);
//       setAuthHeader(res.data.token);
//       return console.log(res.data);
    
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);