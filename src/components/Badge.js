import React from 'react';
import styled from "styled-components";
import {
    COLOR_WHITE,
    COLOR_GREY
} from '../colors';

const Wrapper = styled('p')`
    align-items: center;
    background-color: ${ COLOR_WHITE };
    border: 0.6px solid ${ COLOR_GREY };
    border-radius: 88px;
    display: flex;
    font-size: 12px;
    gap: 4px;
    line-height: 12px;
    padding: 8px 12px;
    margin: 0;
`;

const Badge = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default Badge;
