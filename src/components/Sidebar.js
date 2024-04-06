import React from 'react';
import styled from "styled-components";
import {
    COLOR_WHITE,
    COLOR_GREY,
    COLOR_BOX_SHADOW_GREY,
    COLOR_TRANSPARENT
} from '../colors';
import {
    SIDE_BAR_HEADING,
    CATEGORY_FILTER_LEGEND,
    DELIVERY_TIME_FILTER_LEGEND,
    PRICE_RANGE_FILTER_LEGEND,
    DESKTOP_BREAKPOINT
} from '../constants';
import { isSet } from '../helpers.js';
import Heading from '../elements/Heading';
import Fieldset from '../elements/Fieldset';

const InclusivelyHideOnMobile = styled('div')`
    @media (max-width: ${ DESKTOP_BREAKPOINT }) {
        // Inclusively hidden since screen readers generally ignore anything with display: none.
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;

const HideOnMobile = styled('div')`
    @media (max-width: ${ DESKTOP_BREAKPOINT }) {
        display: none;
    }
`;

const Wrapper = styled('section')`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        background-color: ${ COLOR_WHITE };
        border: 0.6px solid ${ COLOR_GREY };
        border-radius: 8px;
        box-shadow:
            -4px 2px 10px 0px ${ COLOR_BOX_SHADOW_GREY },
            -16px 9px 18px 0px ${ COLOR_BOX_SHADOW_GREY },
            -35px 20px 24px 0px ${ COLOR_TRANSPARENT },
            -63px 36px 29px 0px ${ COLOR_TRANSPARENT },
            -98px 56px 32px 0px ${ COLOR_TRANSPARENT };
        padding: 24px;
        width: 239px;
    }
`;

const Sidebar = () => {
    // TODO: Fetch filters from the API
    const categoryFilters = [
        {
            name: "Hamburger",
            value: "6521e1ee-cf8c-4143-8c80-21e3bda48b2e"
        },
        {
            name: "Pizza",
            value: "be554e59-7c10-442e-a032-2200a6b0d2cf"
        },
        {
            name: "Taco's",
            value: "e7e09166-65ed-457b-944b-d7b1e6b229db"
        },
        {
            name: "Coffee",
            value: "d61a08aa-5e53-4500-a229-f69b1f824605"
        },
        {
            name: "Burrito",
            value: "74c2878b-d520-4cee-ac42-e21f8b088441"
        },
        {
            name: "Fries",
            value: "d4dad40a-bdba-43fe-8ebb-56372e37a450"
        },
        {
            name: "Breakfast",
            value: "b8083ed1-389e-41a7-9cee-a9fe6ed91121"
        },
    ];

    const deliveryTimeFilters = [
        {
            name: "20 min",
            value: "20"
        },
        {
            name: "30 min",
            value: "30"
        },
        {
            name: "45 min",
            value: "45"
        },
        {
            name: "60 min",
            value: "60"
        },
    ];

    const priceRangeFilters = [
        {
            name: "$",
            value: "$"
        },
        {
            name: "$$",
            value: "$$"
        },
        {
            name: "$$$",
            value: "$$$"
        },
        {
            name: "$$$$",
            value: "$$$$"
        },
    ];

    return (
        <Wrapper>
            <InclusivelyHideOnMobile>
                <Heading
                    content={ SIDE_BAR_HEADING }
                    semanticLevel={ 2 }
                    styleLevel={ 3 }
                />
            </InclusivelyHideOnMobile>
            <HideOnMobile>
                { isSet(categoryFilters) && (
                    <Fieldset
                        useFlexDirectionColumn
                        legend={ CATEGORY_FILTER_LEGEND }
                        groupName="category"
                        inputFields={ categoryFilters }
                        customGap="10px"
                    />
                ) }
            </HideOnMobile>
            { isSet(deliveryTimeFilters) && (
                <Fieldset
                    legend={ DELIVERY_TIME_FILTER_LEGEND }
                    groupName="delivery-time"
                    inputFields={ deliveryTimeFilters }
                />
            ) }
            <HideOnMobile>
                { isSet(priceRangeFilters) && (
                    <Fieldset
                        legend={ PRICE_RANGE_FILTER_LEGEND }
                        groupName="price-range"
                        inputFields={ priceRangeFilters }
                    />
                ) }
            </HideOnMobile>
        </Wrapper>
    );
};

export default Sidebar;
