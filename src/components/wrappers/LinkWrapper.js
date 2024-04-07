import React from 'react';
import PropTypes from 'prop-types';
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

LinkWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string
};

LinkWrapper.defaultProps = {
    href: undefined
};

export default LinkWrapper;
