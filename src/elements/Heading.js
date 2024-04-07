import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../constants';
import { isSet } from '../helpers';

const StyledHeading = styled('div')`
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 24px;
    margin: 0;

    &.h1 {
        font-size: 20px;
        line-height: 20px;

        @media (min-width: ${ DESKTOP_BREAKPOINT }) {
            font-size: 40px;
            line-height: 40px;
        }
    }
`;

const Heading = ({
	content,
	semanticLevel,
	styleLevel
}) => {
    if (!isSet(content)) {
        return null;
    }

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

Heading.propTypes = {
    content: PropTypes.string.isRequired,
	semanticLevel: PropTypes.number,
	styleLevel: PropTypes.number
};

Heading.defaultProps = {
    semanticLevel: 2,
	styleLevel: 2
};

export default Heading;
