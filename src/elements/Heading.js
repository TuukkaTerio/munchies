import React from 'react';
import styled from 'styled-components';
import { isSet } from '../helpers';

const StyledHeading = styled('div')`
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 24px;
    margin: 0;

    &.h1 {
        font-size: 40px;
        line-height: 40px;
    }
`;

const Heading = ({
	content,
	semanticLevel,
	styleLevel
}) => {
	const HeadingTag = getHeadingLevel(semanticLevel);

	function getHeadingLevel(semanticLevel) {
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
		<StyledHeading as={ HeadingTag } className={ `h${styleLevel ? styleLevel : semanticLevel}` }>
			{content}
		</StyledHeading>
	);
};

export default Heading;
