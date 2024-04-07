import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled('p')`
    align-items: center;
    display: flex;
    height: 50vh;
    justify-content: center;
    text-align: center;
`;

const NoResults = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

NoResults.propTypes = {
    children: PropTypes.node.isRequired
};

export default NoResults;
