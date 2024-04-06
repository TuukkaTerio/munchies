import React from 'react';
import styled from "styled-components";

const Wrapper = styled('div')`
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 24px;
`;

const MaxWidthWrapper = ({ children }) => <Wrapper>{ children }</Wrapper>;

export default MaxWidthWrapper;
