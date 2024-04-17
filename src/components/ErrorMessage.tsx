import React, { FC, ReactNode } from 'react';
import styled from "styled-components";

const Wrapper = styled.p<{ $height?: string }>`
    align-items: center;
    display: flex;
    height: ${({ $height }) => $height ? $height : 'auto'};
    justify-content: center;
    text-align: center;
`;

interface ErrorMessageProps {
    children: ReactNode;
    height?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children, height }) => (
    <Wrapper $height={ height }>
        { children }
    </Wrapper>
);

export default ErrorMessage;
