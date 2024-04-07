import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import activeFiltersReducer from './activeFiltersSlice';
import restaurantsReducer from './restaurantsSlice';

const rootReducer = {
    filters: filtersReducer,
    activeFilters: activeFiltersReducer,
    restaurants: restaurantsReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
