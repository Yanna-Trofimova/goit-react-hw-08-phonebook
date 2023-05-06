import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, login } from "./auth-services";

export const loginThunk = createAsyncThunk(
    'auth/login', async (body) => {
        return await login(body)
})
    
export const getContactsThunk = createAsyncThunk(
	'auth/contacts',
	// async (_, thunk) => {
	// 	return await getProfile()
	// }
    async () => {
        return await getProfile()
    }
)