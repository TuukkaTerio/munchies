import React from 'react';
import MaxWidthWrapper from './components/wrappers/MaxWidthWrapper';
import ListView from './components/ListView';

const App = () => {
    return (
        <MaxWidthWrapper>
            <ListView />
        </MaxWidthWrapper>
    );
};

export default App;
