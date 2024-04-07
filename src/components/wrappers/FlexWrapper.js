import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from '../../constants';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        flex-direction: ${ ({ $useFlexDirectionColumn }) => $useFlexDirectionColumn ? 'column' : 'row' };
        gap: ${ ({ $useFlexDirectionColumn }) => $useFlexDirectionColumn ? '40px' : '20px' };
    }
`;

const FlexWrapper = ({ children, useFlexDirectionColumn }) => (
    <Wrapper $useFlexDirectionColumn={ useFlexDirectionColumn }>
        { children }
    </Wrapper>
);

FlexWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    useFlexDirectionColumn: PropTypes.bool
};

FlexWrapper.defaultProps = {
    useFlexDirectionColumn: false
};

export default FlexWrapper;
