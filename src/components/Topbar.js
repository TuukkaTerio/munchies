import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoryFilters } from '../services/api';
import { addFilters } from '../store/filtersSlice';
import styled from "styled-components";
import {
    CATEGORY_FILTER_LEGEND,
    SIDEBAR_WIDTH,
    PAGE_SIDE_PADDING,
    DESKTOP_BREAKPOINT,
    SIDEBAR_AND_LIST_VIEW_GAP,
    LOADING_CATEGORY_FILTERS,
    COULD_NOT_GET_CATEGORY_FILTERS
} from '../constants';
import { isSet } from '../helpers.js';
import Checkbox from '../elements/Checkbox.tsx';
import Loader from './Loader.tsx';
import ErrorMessage from './ErrorMessage.tsx';

const StyledFieldset = styled.fieldset`
    border: none;
    margin-inline-start: 0;
    margin-inline-end: 0;
    min-inline-size: min-content;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
`;

const HiddenLegend = styled.legend`
    // Inclusively hidden since screen readers generally ignore anything with display: none.
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const BleedWrapper = styled.div`
    margin: 0 -${ PAGE_SIDE_PADDING };
    max-width: 100vw;
    overflow-x: hidden;
    width: calc(100% + ${ PAGE_SIDE_PADDING } + ${ PAGE_SIDE_PADDING });

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin-left: 0;
        max-width: calc(100vw - ${ PAGE_SIDE_PADDING } - ${ SIDEBAR_AND_LIST_VIEW_GAP } - ${ SIDEBAR_WIDTH });
    }
`;

const ScrollWrapper = styled.div`
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

const Topbar = () => {
    const dispatch = useDispatch();
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchCategoryFiltersData() {
            try {
                const categoryFiltersData = await fetchCategoryFilters();
                setCategoryFilters(categoryFiltersData?.filters || []);
                dispatch(addFilters(categoryFiltersData?.filters || []));
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchCategoryFiltersData();
    }, [dispatch]);

    return (
        <StyledFieldset>
            <HiddenLegend>{ CATEGORY_FILTER_LEGEND }</HiddenLegend>
            { loading && <Loader>{ LOADING_CATEGORY_FILTERS }</Loader> }
            { error && <ErrorMessage>{ COULD_NOT_GET_CATEGORY_FILTERS }</ErrorMessage> }
            { !loading && !error && isSet(categoryFilters) && (
                <BleedWrapper>
                    <ScrollWrapper>
                        { categoryFilters.map((categoryFilter, index) => (
                            <Checkbox
                                key={ `${index}-${categoryFilter.id}` }
                                filterName="category"
                                groupName="topbar-category"
                                id={ `topbar-category-${categoryFilter.name}` }
                                label={ categoryFilter.name }
                                value={ categoryFilter.id }
                                imageUrl={ categoryFilter.image_url }
                            />
                        )) }
                    </ScrollWrapper>
                </BleedWrapper>
            )}
        </StyledFieldset>
    );
};

export default Topbar;
