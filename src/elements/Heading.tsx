import React, { FC } from 'react';
import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../constants';
import { isSet } from '../helpers';

interface HeadingProps {
    content: string;
    semanticLevel?: number;
    styleLevel?: number;
}

const StyledHeading = styled.div`
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 24px;
    margin: 0;

    &.h1 {
        font-size: 20px;
        line-height: 20px;

        @media (min-width: ${DESKTOP_BREAKPOINT}) {
            font-size: 40px;
            line-height: 40px;
        }
    }
`;

const Heading: FC<HeadingProps> = ({ content, semanticLevel = 2, styleLevel = 2 }) => {
    if (!isSet(content)) {
        return null;
    }

    const HeadingTag = getHeadingLevel(semanticLevel);

    function getHeadingLevel(semanticLevel: number): string {
        if (isSet(semanticLevel)) {
            switch (semanticLevel) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    return `h${semanticLevel}`;
                default:
                    return 'p';
            }
        } else {
            return 'p';
        }
    }

    return (
        <StyledHeading as={ HeadingTag } className={ `h${styleLevel}` }>
            { content }
        </StyledHeading>
    );
};

export default Heading;
