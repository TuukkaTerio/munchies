import { configureStore } from '@reduxjs/toolkit';
import activeFiltersReducer from './activeFiltersSlice';
import restaurantsReducer from './restaurantsSlice';

const rootReducer = {
    activeFilters: activeFiltersReducer,
    restaurants: restaurantsReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
