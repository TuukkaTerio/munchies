import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled('p')`
    align-items: center;
    display: flex;
    height: ${ ({ $height }) => $height ? $height : 'auto' };
    justify-content: center;
    text-align: center;
`;

const ErrorMessage = ({ children, height }) => (
    <Wrapper $height={ height }>
        { children }
    </Wrapper>
);

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string
};

ErrorMessage.defaultProps = {
    height: undefined
};

export default ErrorMessage;
