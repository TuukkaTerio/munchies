import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {
    COLOR_GREEN,
    COLOR_WHITE,
} from '../colors';
import {
    APP_START_SCREEN_HEADING,
    APP_START_SCREEN_PARAGRAPH,
    CONTINUE,
    PAGE_SIDE_PADDING,
    DESKTOP_BREAKPOINT
} from '../constants';
import { preventScroll, allowScroll } from '../helpers.js';
import Logotype from './Logotype';
import Button from '../elements/Button';

const Wrapper = styled('div')`
    align-items: flex-start;
    background-color: ${ COLOR_GREEN };
    bottom: 0;
    color: ${ COLOR_WHITE };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 0;
    padding: 40px ${ PAGE_SIDE_PADDING };
    position: fixed;
    right: 0;
    top: 0;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        display: none;
    }
`;

const TextWrapper = styled('div')`
    max-width: 246px;
`;

const AppStartScreenHeading = styled('h2')`
    font-size: 48px;
    font-weight: 760;
    line-height: 48px;
    letter-spacing: -1px;
    margin-bottom: 16px;
`;

const AppStartScreenParagraph = styled('p')`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.5px;
    margin: 0;
`;

const AppStartScreen = () => {
    const [hideAppStartScreen, setHideAppStartScreen] = useState(localStorage.getItem('hide_app_start_screen'));

    useEffect(() => {
        !hideAppStartScreen && preventScroll();
    }, [hideAppStartScreen]);

    const hideOverlay = () => {
        setHideAppStartScreen(true);
        allowScroll();
        localStorage.setItem('hide_app_start_screen', true);
    };

    return !hideAppStartScreen && (
        <Wrapper>
            <Logotype color="white" />
            <TextWrapper>
                <AppStartScreenHeading>
                    { APP_START_SCREEN_HEADING }
                </AppStartScreenHeading>
                <AppStartScreenParagraph>
                    { APP_START_SCREEN_PARAGRAPH }
                </AppStartScreenParagraph>
            </TextWrapper>
            <Button
                actionText={ CONTINUE }
                onClick={() => hideOverlay()}
            />
        </Wrapper>
    );
};

export default AppStartScreen;
