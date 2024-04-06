import React from 'react';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../../constants';

const Wrapper = styled('div')`
    box-sizing: content-box;
    margin: 40px auto 0;
    max-width: 1440px;
    padding: 0 24px;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin-top: 56px;
    }
`;

const MaxWidthWrapper = ({ children }) => <Wrapper>{ children }</Wrapper>;

export default MaxWidthWrapper;
