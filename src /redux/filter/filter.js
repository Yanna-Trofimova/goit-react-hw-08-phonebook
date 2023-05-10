// import { createSlice } from '@reduxjs/toolkit'


// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState: '',
//     reducers: {
//         filterContact(state, action) {
//            return state = action.payload;
         
//         },
//     },
// })

// export const { filterContact } = filterSlice.actions;


import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',

    reducers:{
        updateFilter (state, action) {
             return ( state = action.payload)
            },
    }
})
export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;

