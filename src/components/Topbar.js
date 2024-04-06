import React from 'react';
import styled from "styled-components";
import {
    CATEGORY_FILTER_LEGEND,
    SIDEBAR_WIDTH,
    PAGE_SIDE_PADDING,
    DESKTOP_BREAKPOINT,
    SIDEBAR_AND_LIST_VIEW_GAP
} from '../constants';
import Checkbox from '../elements/Checkbox';

const StyledFieldset = styled('fieldset')`
    border: none;
    margin-inline-start: 0;
    margin-inline-end: 0;
    min-inline-size: min-content;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
`;

const HiddenLegend = styled('legend')`
    // Inclusively hidden since screen readers generally ignore anything with display: none.
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const BleedWrapper = styled('div')`
    margin: 0 -${ PAGE_SIDE_PADDING };
    max-width: 100vw;
    overflow-x: hidden;
    width: calc(100% + ${ PAGE_SIDE_PADDING } + ${ PAGE_SIDE_PADDING });

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin-left: 0;
        max-width: calc(100vw - ${ PAGE_SIDE_PADDING } - ${ SIDEBAR_AND_LIST_VIEW_GAP } - ${ SIDEBAR_WIDTH });
    }
`;

const ScrollWrapper = styled('div')`
    box-sizing: border-box;
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    max-width: 100vw;
    overflow-x: scroll;
    padding: 0 ${ PAGE_SIDE_PADDING };
    scrollbar-width: none;
    width: 100%;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        padding-left: 0;
    }
`;

const Sidebar = () => {
    // TODO: Fetch filters from the API
    const categoryFilters = [
        {
            "id": "6521e1ee-cf8c-4143-8c80-21e3bda48b2e",
            "name": "Hamburger",
            "image_url": "/images/hamburger.png"
        },
        {
            "id": "be554e59-7c10-442e-a032-2200a6b0d2cf",
            "name": "Pizza",
            "image_url": "/images/pizza.png"
        },
        {
            "id": "e7e09166-65ed-457b-944b-d7b1e6b229db",
            "name": "Taco's",
            "image_url": "/images/taco.png"
        },
        {
            "id": "d61a08aa-5e53-4500-a229-f69b1f824605",
            "name": "Coffee",
            "image_url": "/images/coffee.png"
        },
        {
            "id": "74c2878b-d520-4cee-ac42-e21f8b088441",
            "name": "Burrito",
            "image_url": "/images/burrito.png"
        },
        {
            "id": "d4dad40a-bdba-43fe-8ebb-56372e37a450",
            "name": "Fries",
            "image_url": "/images/fries.png"
        },
        {
            "id": "b8083ed1-389e-41a7-9cee-a9fe6ed91121",
            "name": "Breakfast",
            "image_url": "/images/breakfast.png"
        }
    ];

    return (
        <StyledFieldset>
            <HiddenLegend>{ CATEGORY_FILTER_LEGEND }</HiddenLegend>
            <BleedWrapper>
                <ScrollWrapper>
                    { (categoryFilters || []).map((categoryFilter, index) => (
                        <Checkbox
                            key={ `${index}-${categoryFilter.id}` }
                            name="topbar-category"
                            id={ `topbar-category-${categoryFilter.name}` }
                            label={ categoryFilter.name }
                            value={ categoryFilter.id }
                            imageUrl={ categoryFilter.image_url }
                        />
                    )) }
                </ScrollWrapper>
            </BleedWrapper>
        </StyledFieldset>
    );
};

export default Sidebar;
