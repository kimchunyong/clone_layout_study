import React from 'react';

import ResetCss from '../static/resetCss';

import Battery from '../components/battery';
import CategoriesItem from '../components/CategoriesItem';

const App = () => {
    return (
        <div>
            <ResetCss />
            <Battery />
            <CategoriesItem />
        </div>
    )
}

export default App;