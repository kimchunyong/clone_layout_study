import React from 'react';

import Link from 'next/link';

import CategoriesItem from './img/Categories_item_1.png';
import CategorieMore from './img/ca_more_btn.png';

import styled from 'styled-components';

const CategorieList = styled.li`
    padding:15px 0;
    border-bottom:.5px solid #dfdfdf;
`

const CategorieLink = styled.a`
    display: flex;
    color: #333;
`

const CategorieTxtBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex:1 1 auto;
    padding-top: 20px;
    padding-left: 15px;
    color:#000;

    &:after{
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width:12px;
        height:12px;
        margin-top:-6px;
        background:url(${CategorieMore}) 0 0 no-repeat;
    }
`

const CategorieTit = styled.h2`
    font-size: 17px;
    padding-bottom:20px;
`

const CategorieTxt = styled.p`
    font-size: 15px;
    color:rgba(0, 0, 0, 0.4);
`

const CategoriesList = () => {
    return (
        <CategorieList>
            <Link href="#">
                <CategorieLink>
                    <div>
                        <img src={CategoriesItem} />
                    </div>
                    <CategorieTxtBox>
                        <CategorieTit>Decoration</CategorieTit>
                        <CategorieTxt>1065 items</CategorieTxt>
                    </CategorieTxtBox>
                </CategorieLink>
            </Link>
        </CategorieList>
    )
}

export default CategoriesList;