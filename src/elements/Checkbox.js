import React from 'react';
import styled from "styled-components";
import {
    COLOR_WHITE,
    COLOR_BLACK,
    COLOR_GREY,
    COLOR_BOX_SHADOW_GREY,
    COLOR_TRANSPARENT
} from '../colors';

const Wrapper = styled('div')`
    input[type="checkbox"]:checked ~ label {
        background-color: ${ COLOR_BLACK };
        color: ${ COLOR_WHITE };
    }
`;

const StyledLabel = styled('label')`
    background-color: ${ COLOR_WHITE };
    border: 0.6px solid ${ COLOR_GREY };
    border-radius: 8px;
    box-shadow:
        -4px 2px 10px 0px ${ COLOR_BOX_SHADOW_GREY },
        -16px 9px 18px 0px ${ COLOR_BOX_SHADOW_GREY },
        -35px 20px 24px 0px ${ COLOR_TRANSPARENT },
        -63px 36px 29px 0px ${ COLOR_TRANSPARENT },
        -98px 56px 32px 0px ${ COLOR_TRANSPARENT };
    color: ${ COLOR_BLACK };
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 15px;
    padding: 8px 12px;
    transition: all 0.3s ease;
    white-space: pre;

    &:hover {
        background-color: ${ COLOR_GREY };
    }
`;

const StyledInput = styled('input')`
    // Inclusively hidden since screen readers generally ignore anything with display: none.
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Checkbox = ({ name, id, label, value }) => {
    const handleChange = (e) => {
        // TODO: Add real functionality
        alert(`Toggle filter: ${ e.target.name }, value: ${ e.target.value }`);
    };

    return (
        <Wrapper>
            <StyledInput
                type="checkbox"
                name={ name }
                id={ id }
                value={ value }
                onChange={ (e) => handleChange(e) }
            />
            <StyledLabel htmlFor={ id }>
                { label }
            </StyledLabel>
        </Wrapper>
    );
};

export default Checkbox;
