import { createSlice } from '@reduxjs/toolkit';
import { isSet } from '../helpers.js';

const activeFiltersSlice = createSlice({
    name: 'activeFilters',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            const { name, value } = action.payload;
            // Check if both name and value are defined
            if (isSet(name) && isSet(value)) {
                // Check if there is already a filter with the same value.
                if (!state.some(filter => filter.value === value)) {
                    state.push({ name, value });
                }
            }
        },
        removeFilter: (state, action) => {
            const { value } = action.payload;
            // Remove all filter objects with the specified value.
            return state.filter(filter => filter.value !== value);
        },
    },
});

export const { addFilter, removeFilter } = activeFiltersSlice.actions;
export default activeFiltersSlice.reducer;
