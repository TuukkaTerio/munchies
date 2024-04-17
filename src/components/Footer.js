import React from 'react';
import styled from "styled-components";
import {
    GITHUB_LINK_URL,
    GITHUB_LINK_TEXT,
    DESKTOP_BREAKPOINT
} from '../constants';
import { COLOR_BLACK } from '../colors';

const StyledFooter = styled.footer`
    margin: 32px 0;
    text-align: center;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin: 48px 0;
    }
`;

const StyledLink = styled.a`
    color: ${ COLOR_BLACK };
    cursor: pointer;
    display: inline-block;
    margin: auto 0;
    position: relative;
    text-decoration: none;

    &::after {
        background-color: ${ COLOR_BLACK };
        bottom: -2px;
        content: '';
        display: block;
        height: 1px;
        left: 0;
        position: absolute;
        width: 100%;
    }

    @keyframes hoverTextLink {
        0% {
            transform: scale3d(1, 1, 1);
            transform-origin: 100% 50%;
        }
        50% {
            transform: scale3d(0, 1, 1);
            transform-origin: 100% 50%;
        }
        50.1% {
            transform: scale3d(0, 1, 1);
            transform-origin: 0% 50%;
        }
        100% {
            transform: scale3d(1, 1, 1);
            transform-origin: 0% 50%;
        }
    }

    &:hover {
        &::after {
            animation-name: hoverTextLink;
            animation-duration: 800ms;
            animation-timing-function: cubic-bezier(.4,0,.6,1);
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <StyledLink href={ GITHUB_LINK_URL }>
            { GITHUB_LINK_TEXT }
        </StyledLink>
    </StyledFooter>
);

export default Footer;
