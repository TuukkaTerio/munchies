import React from 'react';
import styled from "styled-components";
import { isSet } from '../../helpers.js';

const StyledLink = styled('a')`
    color: inherit;
    cursor: pointer;
    text-decoration: none;
`;

const LinkWrapper = ({ children, href }) => isSet(href)
    ? <StyledLink href={ href } >{ children }</StyledLink>
    : <>{ children }</>;

export default LinkWrapper;
