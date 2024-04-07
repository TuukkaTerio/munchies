import { DELIVERY_TIME_UNIT } from './constants';
import { fetchPriceRangeFilter } from './services/api';

// --------------------------------------------------------------
// General helper functions
// --------------------------------------------------------------

// Checks that a value is not undefined, null or an empty string.
export function isSet(value) {
    return value !== null && value !== undefined && value !== '' && !!value?.length;
}

// Prevent scroll when an overlay is open.
export function preventScroll() {
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    return;
}

// Allow scroll when an overlay is closed.
export function allowScroll() {
    const body = document.body;
    body.style.height = "auto";
    body.style.overflowY = "visible";
    return;
}

// --------------------------------------------------------------
// Filter helper functions
// --------------------------------------------------------------

// Get delivery time filters from the restaurants data.
export function getDeliveryTimeFilters(restaurants) {
    // Check if restaurants array is empty or undefined.
    if (!isSet(restaurants)) {
        return [];
    }

    // Get an array of unique delivery time minutes
    const uniqueDeliveryTimeMinutes = Array.from(
        new Set(restaurants.map(restaurant => restaurant.delivery_time_minutes))
    );

    // Sort the unique delivery time minutes in ascending order
    uniqueDeliveryTimeMinutes.sort((a, b) => a - b);

    // Map the unique delivery time minutes to an array of objects with name and value
    const deliveryTimeFilters = uniqueDeliveryTimeMinutes.map(time => ({
        name: `${ time } ${ DELIVERY_TIME_UNIT }`,
        value: String(time)
    }));

    return deliveryTimeFilters;
}

// Get price range ids from the restaurants data.
export function getPriceRangeIds(restaurants) {
    // Check if restaurants array is empty or undefined.
    if (!isSet(restaurants)) {
        return [];
    }

    // Get an array of unique price range ids
    const uniquePriceRangeIds = Array.from(
        new Set(restaurants.map(restaurant => restaurant.price_range_id))
    );

    return uniquePriceRangeIds;
}

// Get price range filters from the restaurants data.
export async function getPriceRangeFilters(restaurants) {
    // Check if restaurants array is empty or undefined.
    if (!isSet(restaurants)) {
        return [];
    }

    const priceRangeIds = getPriceRangeIds(restaurants);

    // Check if priceRangeIds array is empty or undefined.
    if (!isSet(priceRangeIds)) {
        return [];
    }

    // Fetch price range filter data for each price range id.
    const fetchPromises = priceRangeIds.map(priceRangeId =>
        fetchPriceRangeFilter(priceRangeId)
    );

    try {
        // Wait until all fetch requests are complete.
        const responses = await Promise.all(fetchPromises);

        // Construct the priceRangeFilters array.
        const priceRangeFilters = responses.map(response => ({
            name: response.range,
            value: response.range
        }));

        return priceRangeFilters;
    } catch (error) {
        console.error('Error fetching price range filters:', error);
        return [];
    }
}

// Transform category filters so that they will work with the fieldset element.
export function transformCategoryFilters(categoryFilters) {
    // Check if categoryFilters array is empty or undefined.
    if (!isSet(categoryFilters)) {
        return [];
    }

    return categoryFilters.map(filter => ({
        name: filter.name,
        value: filter.id
    }));
}

// Check if a filter is active.
export function checkIfFilterIsActive(filterValue, activeFilters) {
    return activeFilters.some(filter => filter.value === filterValue);
}
