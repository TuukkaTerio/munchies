import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../constants';

const StyledLegend = styled('legend')`
    font-size: 12px;
    font-weight: 590;
    letter-spacing: -0.5px;
    line-height: 12px;
    margin-bottom: 10px;
    opacity: 0.4;
    text-transform: uppercase;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        margin-bottom: 16px;
    }
`;

const Legend = ({ text }) => <StyledLegend>{text}</StyledLegend>;

Legend.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Legend;
