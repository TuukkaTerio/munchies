import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {
    DESKTOP_BREAKPOINT,
    PAGE_SIDE_PADDING
} from '../../constants';

const Wrapper = styled('div')`
    margin: 0 auto;
    max-width: 100vw;
    padding: 0 ${ PAGE_SIDE_PADDING };

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        max-width: 1440px;
    }
`;

const MaxWidthWrapper = ({ children }) => <Wrapper>{ children }</Wrapper>;

MaxWidthWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MaxWidthWrapper;
