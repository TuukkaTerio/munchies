import React, { FC } from 'react';
import styled from "styled-components";
import {
    PAGE_TITLE,
    DESKTOP_BREAKPOINT
} from '../constants';

const StyledLogotype = styled.img`
    height: 24px;
    width: auto;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        height: 40px;
    }
`;

interface LogotypeProps {
    color?: string;
}

const Logotype: FC<LogotypeProps> = ({ color }) => (
    <StyledLogotype
        src={ `./icons/logotype_${ color || 'black' }.svg` }
        alt={ PAGE_TITLE }
    />
);

export default Logotype;
