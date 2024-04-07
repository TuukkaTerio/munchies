import React from 'react';
import styled from "styled-components";
import { isSet } from '../helpers.js';
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
    flex-direction: ${ ({ $useFlexDirectionColumn }) => $useFlexDirectionColumn ? 'column' : 'row' };
    flex-wrap: wrap;
    gap: ${ ({ $customGap }) => $customGap ? $customGap : '8px' };
`;

const Fieldset = ({ legend, groupName, filterName, inputFields, customGap, useFlexDirectionColumn }) => {
    if (!isSet(inputFields)) {
        return null;
    }

    return (
        <StyledFieldset>
            {isSet(legend) && <Legend text={ legend } />}
            <FlexWrapper $customGap={ customGap } $useFlexDirectionColumn={ useFlexDirectionColumn } >
                { inputFields.map((inputField, index) => (
                    <Checkbox
                        key={ `${index}-${inputField.value}` }
                        filterName={ filterName }
                        groupName={ groupName ? groupName : filterName }
                        id={ inputField.name }
                        label={ inputField.name }
                        value={ inputField.value }
                    />
                )) }
            </FlexWrapper>
        </StyledFieldset>
    );
};

export default Fieldset;
