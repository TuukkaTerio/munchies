import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: [],
    reducers: {
        addFilters: (state, action) => {
            return action.payload;
        },
    },
});

export const { addFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

