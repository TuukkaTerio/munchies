import React from 'react';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../constants';
import { PAGE_TITLE } from '../constants';

const StyledHeader = styled('header')`
    margin-top: 40px;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin-top: 56px;
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

const Logotype = styled('img')`
    height: 24px;
    margin-bottom: 24px;
    width: auto;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        height: 40px;
        margin-bottom: 48px;
    }
`;

const Header = () => (
    <StyledHeader>
        <HiddenH1>{ PAGE_TITLE }</HiddenH1>
        <Logotype
            src="./icons/logotype.svg"
            alt={ PAGE_TITLE }
        />
    </StyledHeader>
);

export default Header;
