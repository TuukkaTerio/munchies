import React, { FC } from 'react';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT, PAGE_SIDE_PADDING } from '../../constants';

interface MaxWidthWrapperProps {
    children: React.ReactNode;
}

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 100vw;
    padding: 0 ${ PAGE_SIDE_PADDING };

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        max-width: 1440px;
    }
`;

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ children }) => <Wrapper>{ children }</Wrapper>;

export default MaxWidthWrapper;
