import React from 'react';
import styled from "styled-components";
import { COLOR_GREEN } from '../colors';

const StyledArrow = styled('div')`
    background: ${ COLOR_GREEN } url('./icons/arrow.svg') no-repeat center;
    background-size: 11.37px 9.38px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    flex: none;
    transition: background-color 0.3s ease;
    height: 32px;
    width: 32px;
`;

const ArrowIcon = () => <StyledArrow className='arrow-icon' />;

export default ArrowIcon;
