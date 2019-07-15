import React from 'react';

import StautsIco from './img/Combined Shape.png';
import WifiIco from './img/Wi-Fi.png';
import BatteryIco from './img/Battery.png';

import styled from 'styled-components';

const BatteryContainer = styled.div`
    position: relative;
    display:flex;
    padding:20px 20px 32px 20px;
    z-index: 5;
`

const BatteryTime = styled.span`
    flex: 1 0 auto;
`

const BatteryItems = styled.span`
    padding:0 5px;
`

const Battery = () => {
    return (
        <BatteryContainer>
            <BatteryTime>9:41</BatteryTime>
            <div>
                <BatteryItems><img src={StautsIco} /></BatteryItems>
                <BatteryItems><img src={WifiIco} /></BatteryItems>
                <BatteryItems><img src={BatteryIco} /></BatteryItems>
            </div>
        </BatteryContainer>
    )
}

export default Battery;