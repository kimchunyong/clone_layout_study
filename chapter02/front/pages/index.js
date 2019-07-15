import React from 'react';

import ResetCss from '../static/resetCss';

import Battery from '../components/battery';
import Home from '../components/Home';

const App = () => {
    return (
        <div>
            <ResetCss />
            <Battery />
            <Home/>
        </div>
    )
}

export default App;