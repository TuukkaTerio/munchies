import React, { FC, ReactNode } from 'react';
import styled from "styled-components";

const Wrapper = styled.p`
    align-items: center;
    display: flex;
    height: 50vh;
    justify-content: center;
    text-align: center;
`;

interface NoResultsProps {
    children: ReactNode;
}

const NoResults: FC<NoResultsProps> = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default NoResults;
