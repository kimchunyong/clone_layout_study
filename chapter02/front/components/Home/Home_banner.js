import React from 'react';

import HomeBannerBg from './img/main_bg.png';
import HomeClose from './img/banner_close.png';

import styled from 'styled-components';

const BannerConatiner = styled.div`
    position:relative;
    top: -70px;
    margin-bottom: -70px;
`

const CloseBox = styled.span`
    position: absolute;
    top: 50px;
`

const BannerClose = styled.img`
    position:absolute;
    top:15px;
    left:15px;
    cursor:pointer;
`

const HomeBanner = () => {
    return (
        <BannerConatiner>
            <CloseBox>
                <BannerClose src={HomeClose} />
            </CloseBox>
            <img src={HomeBannerBg} />
        </BannerConatiner>
    )
}

export default HomeBanner;