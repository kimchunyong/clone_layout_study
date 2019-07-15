import React from 'react';

import HomeBanner from './Home_banner';
import HomeTit from './Home_tit';
import HomeList from './Home_list';

const AppTopNav = () => {
    return (
        <div>
            <HomeBanner />
            <HomeTit />
            <HomeList />
            <HomeList />
            <HomeList />
        </div>
    )
}

export default AppTopNav;