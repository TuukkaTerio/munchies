import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from './constants';
import MaxWidthWrapper from './components/wrappers/MaxWidthWrapper.tsx';
import Header from './components/Header';
import Footer from './components/Footer';
import ListView from './components/ListView';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AppStartScreen from './components/AppStartScreen';

const Main = styled.main`
    display: grid;
    gap: 24px;

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        column-gap: 20px;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        row-gap: 40px;
    }
`;

const App = () => {
    return (
        <Provider store={store}>
            <MaxWidthWrapper>
                <Header />
                <Main>
                    <Sidebar />
                    <Topbar />
                    <ListView />
                    <AppStartScreen />
                </Main>
                <Footer />
            </MaxWidthWrapper>
        </Provider>
    );
};

export default App;
