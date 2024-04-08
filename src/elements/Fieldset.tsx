import React, { FC } from 'react';
import styled from "styled-components";
import { isSet } from '../helpers';
import Legend from './Legend.tsx';
import Checkbox from './Checkbox.tsx';

interface FieldsetProps {
    legend?: string;
    groupName: string;
    filterName: string;
    inputFields: { name: string; value: string }[];
    customGap?: string;
    useFlexDirectionColumn?: boolean;
}

const StyledFieldset = styled.fieldset`
    border: none;
    margin-inline-start: 0;
    margin-inline-end: 0;
    min-inline-size: min-content;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
`;

const FlexWrapper = styled.div<{ $useFlexDirectionColumn?: boolean; $customGap?: string; }>`
    align-items: flex-start;
    display: flex;
    flex-direction: ${props => props.$useFlexDirectionColumn ? 'column' : 'row'};
    flex-wrap: wrap;
    gap: ${props => props.$customGap || '8px'};
`;

const Fieldset: FC<FieldsetProps> = ({ legend, groupName, filterName, inputFields, customGap, useFlexDirectionColumn = false }) => {
    if (!isSet(inputFields)) {
        return null;
    }

    return (
        <StyledFieldset>
            {!!legend?.length && <Legend text={ legend } />}
            <FlexWrapper $customGap={ customGap } $useFlexDirectionColumn={ useFlexDirectionColumn }>
                {inputFields.map((inputField, index) => (
                    <Checkbox
                        key={ `${index}-${inputField.value}` }
                        filterName={ filterName }
                        groupName={ groupName || filterName }
                        id={ inputField.name }
                        label={ inputField.name }
                        value={ inputField.value }
                    />
                ))}
            </FlexWrapper>
        </StyledFieldset>
    );
};

export default Fieldset;
