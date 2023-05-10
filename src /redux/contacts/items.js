//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const contactApi = createApi({
//     reducerPath: 'contacts',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
//     tagTypes:['Contacts'],
//     endpoints: (builder) => ({
//         fetchContacts: builder.query({
//             query: () => '/contacts',
//             providesTags: ['Contacts']
        
//         }),
//         deleteContact: builder.mutation({
//             query: id => ({
//                 url: `/contacts/${id}`,
//                 method: 'DELETE'
//             }),
//             invalidatesTags:['Contacts']
//         }),
//         addContact: builder.mutation({
//             query: values => ({
//                 url:'/contacts',
//                 method: 'POST',
//                 body: values,
//             }),
//              invalidatesTags:['Contacts']
//         })
//     }),
// })



//  export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactApi

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
      "contacts/fetchAll",
      async (_, thunkAPI) => {
        try {
          const res = await axios.get('/contacts');
          return res.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      
      }
    );
    
    export const addContact = createAsyncThunk(
      "contacts/addContact",
      async ({name, number}, thunkAPI) => {
        try {
          const response = await axios.post('/contacts',{ name, number });
          return response.data
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
    
    export const deleteContact = createAsyncThunk(
      "contacts/deleteContact",
      async (contactId, thunkAPI) => {
        try {
           await axios.delete(`/contacts/${contactId}`);
          return contactId;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
    
