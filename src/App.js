import React from 'react';
import MaxWidthWrapper from './components/wrappers/MaxWidthWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import FlexWrapper from './components/wrappers/FlexWrapper';
import ListView from './components/ListView';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AppStartScreen from './components/AppStartScreen';

const App = () => {
    return (
        <MaxWidthWrapper>
            <Header />
            <main>
                <FlexWrapper>
                    <Sidebar />
                    <FlexWrapper useFlexDirectionColumn>
                        <Topbar />
                        <ListView />
                    </FlexWrapper>
                </FlexWrapper>
                <AppStartScreen />
            </main>
            <Footer />
        </MaxWidthWrapper>
    );
};

export default App;
