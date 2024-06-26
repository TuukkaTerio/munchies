import React, { FC } from 'react';
import styled from "styled-components";
import { isSet } from '../../helpers';

const StyledLink = styled.a`
    color: inherit;
    cursor: pointer;
    text-decoration: none;
`;

interface LinkWrapperProps {
    children: React.ReactNode;
    href?: string;
}

const LinkWrapper: FC<LinkWrapperProps> = ({ children, href }) => isSet(href)
    ? <StyledLink href={ href }>{ children }</StyledLink>
    : <>{ children }</>;

export default LinkWrapper;
