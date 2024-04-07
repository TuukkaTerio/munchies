import { createSlice } from '@reduxjs/toolkit';

const activeFiltersSlice = createSlice({
    name: 'activeFilters',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            const { name, value } = action.payload;
            state.push({ name, value });
        },
        removeFilter: (state, action) => {
            const index = state.findIndex(filter => filter.name === action.payload.name);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateFilter: (state, action) => {
            const { name, value } = action.payload;
            const filterToUpdate = state.find(filter => filter.name === name);
            if (filterToUpdate) {
                filterToUpdate.value = value;
            }
        },
    },
});

export const { addFilter, removeFilter, updateFilter } = activeFiltersSlice.actions;
export default activeFiltersSlice.reducer;
