import React from 'react';
import { useSelector } from 'react-redux';
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
    DESKTOP_BREAKPOINT,
    SIDEBAR_WIDTH
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
        width: ${ SIDEBAR_WIDTH };
    }
`;

const Sidebar = () => {
    const categoryFilters = useSelector(state => state.filters);

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
