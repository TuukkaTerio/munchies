import React from 'react';
import styled from "styled-components";
import {
    DESKTOP_BREAKPOINT,
    PAGE_SIDE_PADDING
} from '../../constants';

const Wrapper = styled('div')`
    box-sizing: border-box;
    margin: 40px auto 24px;
    max-width: 100vw;
    overflow-x: hidden;
    padding: 0 ${ PAGE_SIDE_PADDING };
    width: 100%;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin-top: 56px;
        max-width: 1440px;
    }
`;

const MaxWidthWrapper = ({ children }) => <Wrapper>{ children }</Wrapper>;

export default MaxWidthWrapper;
