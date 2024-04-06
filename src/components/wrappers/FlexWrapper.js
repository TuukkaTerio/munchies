import React from 'react';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../../constants';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        flex-direction: ${ ({ $useFlexDirectionColumn }) => $useFlexDirectionColumn ? 'column' : 'row' };
        gap: 20px;
    }
`;

const FlexWrapper = ({ children, useFlexDirectionColumn }) => (
    <Wrapper $useFlexDirectionColumn={ useFlexDirectionColumn }>
        { children }
    </Wrapper>
);

export default FlexWrapper;
