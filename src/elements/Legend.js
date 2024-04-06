import React from 'react';
import styled from "styled-components";

const StyledLegend = styled('legend')`
    font-size: 12px;
    font-weight: 590;
    letter-spacing: -0.5px;
    line-height: 12px;
    margin-bottom: 16px;
    opacity: 0.4;
    text-transform: uppercase;
`;

const Legend = ({ text }) => <StyledLegend>{text}</StyledLegend>;

export default Legend;
