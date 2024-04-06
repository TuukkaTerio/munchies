import React from 'react';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../constants';
import { PAGE_TITLE } from '../constants';
import Logotype from './Logotype';

const StyledHeader = styled('header')`
    margin: 40px 0 24px;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin: 56px 0 48px;
    }
`;

const HiddenH1 = styled('h1')`
    // Inclusively hidden since screen readers generally ignore anything with display: none.
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Header = () => (
    <StyledHeader>
        <HiddenH1>{ PAGE_TITLE }</HiddenH1>
        <Logotype color="black" />
    </StyledHeader>
);

export default Header;
