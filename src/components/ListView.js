import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../services/api';
import { addRestaurants } from '../store/restaurantsSlice';
import styled from "styled-components";
import {
    LIST_VIEW_HEADING,
    DESKTOP_BREAKPOINT,
    LOADING_RESTAURANTS,
    COULD_NOT_GET_RESTAURANTS
} from '../constants';
import { isSet } from '../helpers.js';
import Heading from '../elements/Heading';
import RestaurantCard from './RestaurantCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

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
    const [restaurants, setRestaurants] = useState([]);
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

    return (
        <StyledSection>
            <Heading
                content={ LIST_VIEW_HEADING }
                semanticLevel={ 2 }
                styleLevel={ 1 }
            />
            { loading && <Loader height="50vh">{ LOADING_RESTAURANTS }</Loader> }
            { error && <ErrorMessage height="50vh">{ COULD_NOT_GET_RESTAURANTS }</ErrorMessage> }
            { !loading && !error && isSet(restaurants) && (
                <Grid>
                    { restaurants.map((restaurant, index) => (
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
        </StyledSection>
    );
}

export default ListView;
