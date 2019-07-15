import React from 'react';

import ShowAll from './img/ca_more_btn.png';

import styled from 'styled-components';

const TitBox = styled.div`
    display:flex;
    padding: 40px 0px 0 0;
`

const Tit = styled.h1`
    flex: 1 0 auto;
    font-size: 17px;
`
const TitTxt = styled.span`
    padding-right:15px;
    background:url(${ShowAll}) right center no-repeat;;
`

const HomeTit = () => {
    return (
        <TitBox>
            <Tit>Chairs (350)</Tit>
            <TitTxt>Show all</TitTxt>
        </TitBox>
    )
}

export default HomeTit;