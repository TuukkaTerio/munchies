import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: [],
    reducers: {
        addRestaurants: (state, action) => {
            return action.payload;
        },
    },
});

export const { addRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
