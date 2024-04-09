import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants } from '../services/api';
import { addRestaurants } from '../store/restaurantsSlice';
import styled from "styled-components";
import {
    LIST_VIEW_HEADING,
    DESKTOP_BREAKPOINT,
    LOADING_RESTAURANTS,
    COULD_NOT_GET_RESTAURANTS,
    NO_RESTAURANTS_FOUND
} from '../constants';
import {
    isSet,
    filterRestaurants
} from '../helpers.js';
import Heading from '../elements/Heading.tsx';
import RestaurantCard from './RestaurantCard.tsx';
import Loader from './Loader.tsx';
import ErrorMessage from './ErrorMessage.tsx';
import NoResults from './NoResults.tsx';

const StyledSection = styled('section')`
    width: 100%;
`;

const Grid = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 32px;
    }
`;

const ListView = () => {
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters || []);
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchRestaurantsData() {
            try {
                const restaurantsData = await fetchRestaurants();
                setRestaurants(restaurantsData?.restaurants || []);
                dispatch(addRestaurants(restaurantsData?.restaurants || []));
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchRestaurantsData();
    }, [dispatch]);

    useEffect(() => {
        setFilteredRestaurants(filterRestaurants(restaurants, activeFilters));
    }, [activeFilters, restaurants]);

    return (
        <StyledSection>
            <Heading
                content={ LIST_VIEW_HEADING }
                semanticLevel={ 2 }
                styleLevel={ 1 }
            />
            { loading && <Loader height="50vh">{ LOADING_RESTAURANTS }</Loader> }
            { error && <ErrorMessage height="50vh">{ COULD_NOT_GET_RESTAURANTS }</ErrorMessage> }
            { !loading && !error && isSet(filteredRestaurants) && (
                <Grid>
                    { filteredRestaurants.map((restaurant, index) => (
                        <li key={ `${index}-${restaurant.id}` }>
                            <RestaurantCard
                                id={ restaurant.id }
                                animationIndex={ index }
                                name={ restaurant.name }
                                imageUrl={ restaurant.image_url }
                                restaurantUrl="/" // TODO: Replace with a real URL when available from the API.
                                deliveryTimeMinutes={ restaurant.delivery_time_minutes }
                                priceRangeId={ restaurant.price_range_id }
                            />
                        </li>
                    )) }
                </Grid>
            ) }
            { !loading && !error && !isSet(filteredRestaurants) && <NoResults>{ NO_RESTAURANTS_FOUND }</NoResults> }
        </StyledSection>
    );
};

export default ListView;
