import React from 'react';
import MaxWidthWrapper from './components/wrappers/MaxWidthWrapper';
import FlexWrapper from './components/wrappers/FlexWrapper';
import ListView from './components/ListView';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const App = () => {
    return (
        <MaxWidthWrapper>
            <FlexWrapper>
                <Sidebar />
                <FlexWrapper useFlexDirectionColumn>
                    <Topbar />
                    <ListView />
                </FlexWrapper>
            </FlexWrapper>
        </MaxWidthWrapper>
    );
};

export default App;
