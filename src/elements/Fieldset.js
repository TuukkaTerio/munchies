import React from 'react';
import styled from "styled-components";
import Legend from './Legend';
import Checkbox from './Checkbox';

const StyledFieldset = styled('fieldset')`
    border: none;
    margin-inline-start: 0;
    margin-inline-end: 0;
    min-inline-size: min-content;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
`;

const FlexWrapper = styled('div')`
    display: flex;
    flex-direction: ${ ({ useFlexDirectionColumn }) => useFlexDirectionColumn ? 'column' : 'row' };
    flex-wrap: wrap;
    gap: ${ ({ customGap }) => customGap ? customGap : '8px' };
`;

const Fieldset = ({ legend, groupName, inputFields, customGap, useFlexDirectionColumn }) => (
    <StyledFieldset>
        <Legend text={ legend } />
        <FlexWrapper $customGap={ customGap } $useFlexDirectionColumn={ useFlexDirectionColumn } >
            { (inputFields || []).map((inputField, index) => (
                <Checkbox
                    key={ `${index}-${inputField.value}` }
                    name={ groupName }
                    id={ inputField.name }
                    label={ inputField.name }
                    value={ inputField.value }
                />
            )) }
        </FlexWrapper>
    </StyledFieldset>
);

export default Fieldset;
