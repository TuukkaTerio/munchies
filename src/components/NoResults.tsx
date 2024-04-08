import React, { FC, ReactNode } from 'react';
import styled from "styled-components";

interface NoResultsProps {
    children: ReactNode;
}

const Wrapper = styled('p')`
    align-items: center;
    display: flex;
    height: 50vh;
    justify-content: center;
    text-align: center;
`;

const NoResults: FC<NoResultsProps> = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default NoResults;
