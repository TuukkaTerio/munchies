const BASE_URL = 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api';

export async function fetchRestaurants() {
    try {
        const response = await fetch(`${BASE_URL}/restaurants`);
        if (!response.ok) {
            throw new Error('Failed to fetch restaurants');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}

export async function fetchCategoryFilters() {
    try {
        const response = await fetch(`${BASE_URL}/filter`);
        if (!response.ok) {
            throw new Error('Failed to fetch category filters');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching category filters:', error);
        throw error;
    }
}

export async function fetchPriceRangeFilter(priceRangeId) {
    try {
        const response = await fetch(`${BASE_URL}/price-range/${ priceRangeId }`);
        if (!response.ok) {
            throw new Error('Failed to fetch price range filters');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching price range filters:', error);
        throw error;
    }
}

export async function fetchRestaurantOpenStatus(restaurantId) {
    try {
        const response = await fetch(`${BASE_URL}/open/${ restaurantId }`);
        if (!response.ok) {
            throw new Error('Failed to fetch restaurant open status');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching restaurant open status:', error);
        throw error;
    }
}
