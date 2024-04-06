import React from 'react';
import styled from "styled-components";
import { LIST_VIEW_HEADING, DESKTOP_BREAKPOINT } from '../constants';
import Heading from '../elements/Heading';
import RestaurantCard from './RestaurantCard';

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
    // TODO: Fetch restaurants from the API
    const restaurants = [
        {
            "id": "d5c516cd-eb9a-40fa-bfe4-ab87534cd8b9",
            "name": "Waynes Coffee",
            "rating": 4.5,
            "filter_ids": ["d61a08aa-5e53-4500-a229-f69b1f824605"],
            "image_url": "/images/coffee.png",
            "delivery_time_minutes": 30,
            "price_range_id": "b8db215a-27f5-47a4-9416-066ba3006a31"
        },
        {
            "id": "b8300690-958f-410c-960e-c3b499d3bc8d",
            "name": "Oskars Tacos",
            "rating": 3.8,
            "filter_ids": ["e7e09166-65ed-457b-944b-d7b1e6b229db"],
            "image_url": "/images/taco.png",
            "delivery_time_minutes": 45,
            "price_range_id": "d53c6422-0680-43fe-82f9-0f37997a4b50"
        },
        {
            "id": "1a020d7a-91e5-40fe-94e5-99f28df4ef0e",
            "name": "Dawids Deli",
            "rating": 4.9,
            "filter_ids": ["d4dad40a-bdba-43fe-8ebb-56372e37a450", "74c2878b-d520-4cee-ac42-e21f8b088441"],
            "image_url": "/images/fries.png",
            "delivery_time_minutes": 60,
            "price_range_id": "6834e02c-fa9f-4418-957e-4f586f3a765a"
        },
        {
            "id": "94ce4622-2d2d-4def-abc8-e93b53f3f6d8",
            "name": "Viktors Valmofrön & Potatis",
            "rating": 4.2,
            "filter_ids": ["be554e59-7c10-442e-a032-2200a6b0d2cf", "d4dad40a-bdba-43fe-8ebb-56372e37a450"],
            "image_url": "/images/pizza.png",
            "delivery_time_minutes": 30,
            "price_range_id": "d53c6422-0680-43fe-82f9-0f37997a4b50"
        },
        {
            "id": "f2403e83-e737-4abf-a95d-836b0d65e007",
            "name": "Sebbes Slizes",
            "rating": 4.3,
            "filter_ids": ["be554e59-7c10-442e-a032-2200a6b0d2cf"],
            "image_url": "/images/pizza.png",
            "delivery_time_minutes": 45,
            "price_range_id": "b8db215a-27f5-47a4-9416-066ba3006a31"
        },
        {
            "id": "212357de-994b-4a81-b6c1-a59626964781",
            "name": "Karls Korv (vegan)",
            "rating": 4.4,
            "filter_ids": ["b8083ed1-389e-41a7-9cee-a9fe6ed91121"],
            "image_url": "/images/breakfast.png",
            "delivery_time_minutes": 20,
            "price_range_id": "767a4aec-6061-4afd-9e1b-f5738ee9f643"
        },
        {
            "id": "79e53b9a-b1ac-4d58-baa9-7edaff57f4cf",
            "name": "Emils Elit-biffar",
            "rating": 4.5,
            "filter_ids": ["6521e1ee-cf8c-4143-8c80-21e3bda48b2e"],
            "image_url": "/images/hamburger.png",
            "delivery_time_minutes": 60,
            "price_range_id": "6834e02c-fa9f-4418-957e-4f586f3a765a"
        }
    ];

    return (
        <StyledSection>
            <Heading
                content={ LIST_VIEW_HEADING }
                semanticLevel={ 2 }
                styleLevel={ 1 }
            />
            <Grid>
                { (restaurants || []).map((restaurant, index) => (
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
        </StyledSection>
    );
}

export default ListView;
