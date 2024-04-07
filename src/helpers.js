import { DELIVERY_TIME_UNIT } from './constants';

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
