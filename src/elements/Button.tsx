import React, { FC, useState } from 'react';
import styled from "styled-components";
import { COLOR_WHITE, COLOR_GREEN } from '../colors';
import { isSet } from '../helpers';

const StyledButton = styled.button`
    background: none;
    border: 1px solid ${ COLOR_WHITE };
    border-radius: 8px;
    color: ${ COLOR_WHITE };
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 20px;
    transition: all 0.3s ease;
    width: 100%;

    &:hover,
    &:focus {
        background-color: ${ COLOR_WHITE };
        color: ${ COLOR_GREEN };
    }
`;

interface ButtonProps {
    onClick: () => void;
    actionText?: string;
}

const Button: FC<ButtonProps> = ({ onClick, actionText }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    // Disable the button for 900 milliseconds in order to handle fast clicks.
    function handleButtonClick() {
        setIsDisabled(true);
        onClick();
        setTimeout(() => {
            setIsDisabled(false);
        }, 900);
    }

    return (
        <StyledButton
            onClick={() => {
                handleButtonClick();
            }}
            disabled={ isDisabled }>
            {isSet(actionText) && actionText}
        </StyledButton>
    );
};

export default Button;
