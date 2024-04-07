import React from 'react';
import styled from "styled-components";

const Wrapper = styled('p')`
    align-items: center;
    display: flex;
    height: 50vh;
    justify-content: center;
    text-align: center;
`;

const ErrorMessage = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default ErrorMessage;
