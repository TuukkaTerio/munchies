import React from 'react';
import styled from "styled-components";
import { COLOR_BLACK } from '../colors';

const Wrapper = styled('p')`
    align-content: center;
    display: flex;
    flex-wrap: wrap-reverse;
    font-size: 24px;
    gap: 8px;
    height: 50vh;
    line-height: 24px;
    justify-content: center;
    text-align: center;
`;

const AnimatedEllipsis = styled('span')`
    display: inline-block;
    height: 8px;
    position: relative;
    top: -5px;
    width: 66px;

    &,
    span {
        box-sizing: border-box;
    }

    span {
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        background-color: ${ COLOR_BLACK };
        border-radius: 50%;
        height: 10px;
        position: absolute;
        top: 0;
        width: 10px;
    }

    span:nth-child(1) {
        animation: ellipsis-1 0.6s infinite;
        left: 8px;
    }

    span:nth-child(2) {
        animation: ellipsis-2 0.6s infinite;
        left: 8px;
    }

    span:nth-child(3) {
        animation: ellipsis-2 0.6s infinite;
        left: 32px;
    }

    span:nth-child(4) {
        animation: ellipsis-3 0.6s infinite;
        left: 56px;
    }

    @keyframes ellipsis-1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes ellipsis-3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes ellipsis-2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
`;

const Loader = ({ children }) => (
    <Wrapper>
        { children }
        <AnimatedEllipsis>
            <span />
            <span />
            <span />
            <span />
        </AnimatedEllipsis>
    </Wrapper>
);

export default Loader;
