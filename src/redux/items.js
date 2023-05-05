 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    tagTypes:['Contacts'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts']
        
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['Contacts']
        }),
        addContact: builder.mutation({
            query: values => ({
                url:'/contacts',
                method: 'POST',
                body: values,
            }),
             invalidatesTags:['Contacts']
        })
    }),
})



 export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactApi
