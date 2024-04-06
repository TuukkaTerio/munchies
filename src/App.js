import React from 'react';
import MaxWidthWrapper from './components/wrappers/MaxWidthWrapper';
import FlexWrapper from './components/wrappers/FlexWrapper';
import ListView from './components/ListView';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <MaxWidthWrapper>
            <FlexWrapper>
                <Sidebar />
                <ListView />
            </FlexWrapper>
        </MaxWidthWrapper>
    );
};

export default App;
