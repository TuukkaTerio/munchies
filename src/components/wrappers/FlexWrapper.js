import React from 'react';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../../constants';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        flex-direction: row;
        gap: 20px;
    }
`;

const FlexWrapper = ({ children }) => <Wrapper>{ children }</Wrapper>;

export default FlexWrapper;
