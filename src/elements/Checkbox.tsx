import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../store/activeFiltersSlice';
import styled from "styled-components";
import {
    COLOR_WHITE,
    COLOR_BLACK,
    COLOR_GREY,
    COLOR_BOX_SHADOW_GREY,
    COLOR_TRANSPARENT
} from '../colors';
import {
    isSet,
    checkIfFilterIsActive
} from '../helpers';

interface CheckboxProps {
    groupName?: string;
    filterName: string;
    id: string;
    label: string;
    imageUrl?: string;
    value: string;
}

const StyledLabel = styled.label<{ $isChecked: boolean; $hasImage: boolean }>`
    background-color: ${ props => props.$isChecked ? COLOR_BLACK : COLOR_WHITE };
    border: 0.6px solid ${ COLOR_GREY };
    border-radius: 8px;
    box-shadow:
        -4px 2px 10px 0px ${ COLOR_BOX_SHADOW_GREY },
        -16px 9px 18px 0px ${ COLOR_BOX_SHADOW_GREY },
        -35px 20px 24px 0px ${ COLOR_TRANSPARENT },
        -63px 36px 29px 0px ${ COLOR_TRANSPARENT },
        -98px 56px 32px 0px ${ COLOR_TRANSPARENT };
    box-sizing: border-box;
    color: ${ props => props.$isChecked ? COLOR_WHITE : COLOR_BLACK };
    cursor: pointer;
    display: inline-block;
    font-size: ${ props => props.$hasImage ? '14px' : '12px' };
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: ${ props => props.$hasImage ? '14px' : '15px' };
    padding: ${ props => props.$hasImage ? '16px 12px' : '8px 12px' };
    position: relative;
    transition: all 0.3s ease;
    height: ${ props => props.$hasImage ? '80px' : 'auto' };
    white-space: pre;
    width: ${ props => props.$hasImage ? '160px' : 'auto' };

    &:hover {
        background-color: ${ props => props.$isChecked ? COLOR_BLACK : COLOR_GREY };
    }
`;

const StyledInput = styled.input`
    // Inclusively hidden since screen readers generally ignore anything with display: none.
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Image = styled.img`
    position: absolute;
    right: -12px;
    top: 0px;
    user-select: none;
`;

const Checkbox: React.FC<CheckboxProps> = ({ groupName, filterName, id, label, value, imageUrl }) => {
    const dispatch = useDispatch();
    const activeFilters = useSelector((state: any) => state.activeFilters || []);
    const [isChecked, setIsChecked] = useState(false);
    const hasImage = isSet(imageUrl);

    const toggleFilter = () => {
        dispatch(isChecked ? removeFilter({ value: value }) : addFilter({ name: filterName, value: value }));
    };

    useEffect(() => {
        setIsChecked(checkIfFilterIsActive(value, activeFilters));
    }, [activeFilters, value]);

    return (
        <>
            <StyledInput
                type="checkbox"
                name={ groupName }
                id={ id }
                value={ value }
                defaultChecked={ isChecked }
                onChange={ toggleFilter }
            />
            <StyledLabel htmlFor={ id } $hasImage={ hasImage } $isChecked={ isChecked }>
                { label }
                {hasImage && (
                    <Image
                        src={ imageUrl }
                        alt={ filterName }
                        width="80"
                        height="80"
                    />
                )}
            </StyledLabel>
        </>
    );
};

Checkbox.propTypes = {
    filterName: PropTypes.string.isRequired,
    groupName: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    value: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    groupName: undefined,
    imageUrl: undefined,
};

export default Checkbox;
