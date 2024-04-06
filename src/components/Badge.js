import React from 'react';
import styled from "styled-components";
import { COLOR_GREY } from '../colors';

const Wrapper = styled('p')`
    align-items: center;
    border: 0.6px solid ${ COLOR_GREY };
    border-radius: 88px;
    display: flex;
    gap: 4px;
    padding: 8px 12px;
    margin: 0;
`;

const Badge = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default Badge;
