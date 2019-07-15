import React from 'react';

import PrevBtn from './img/prev_ico.png';

import styled from 'styled-components';

const CategoriesContainer = styled.section`
    position:relative;
    padding: 0 15px 30px 15px;
    border-bottom:.5px solid #dfdfdf;
`

const PrevBox = styled.span`
    position: absolute;
    top:0;
    left: 15px;
`

const CategoriesTit = styled.h1`
    text-align: center;
    font-size:17px;
`

const CategoriesTop = () => {
    return (
        <CategoriesContainer>
            <PrevBox><img src={PrevBtn} /></PrevBox>
            <CategoriesTit>Categories</CategoriesTit>
        </CategoriesContainer>
    )
}

export default CategoriesTop;