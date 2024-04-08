import React, { FC, ReactNode } from 'react';
import styled, { keyframes } from "styled-components";
import { COLOR_BLACK } from '../colors';

interface LoaderProps {
    children: ReactNode;
    height?: string;
}

const Wrapper = styled.p<{ $height?: string }>`
    align-content: center;
    display: flex;
    flex-wrap: wrap-reverse;
    font-size: 24px;
    gap: 8px;
    height: ${({ $height }) => $height ? $height : 'auto'};
    line-height: 24px;
    justify-content: center;
    text-align: center;
`;

const ellipsis_1 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const ellipsis_2 = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
`;

const ellipsis_3 = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

const AnimatedEllipsis = styled.span`
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
        animation: ${ ellipsis_1 } 0.6s infinite;
        left: 8px;
    }

    span:nth-child(2) {
        animation: ${ ellipsis_2 } 0.6s infinite;
        left: 8px;
    }

    span:nth-child(3) {
        animation: ${ ellipsis_2 } 0.6s infinite;
        left: 32px;
    }

    span:nth-child(4) {
        animation: ${ ellipsis_3 } 0.6s infinite;
        left: 56px;
    }
`;

const Loader: FC<LoaderProps> = ({ children, height }) => (
    <Wrapper $height={ height }>
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
