import React from 'react';

import Link from 'next/link';

import CategoriesItem from './img/Categories_item_1.png';

import styled from 'styled-components';

const HomeListBox = styled.li`
    padding:15px 0;
    border-bottom:.5px solid #dfdfdf;
`

const HomeLink = styled.a`
    display: flex;
    color: #333;
`

const HomeTxtBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex:1 1 auto;
    padding-top: 20px;
    padding-left: 15px;
    color:#000;
`

const HomeTit = styled.h2`
    font-size: 17px;
    padding-bottom:20px;
`

const HomeTxt = styled.p`
    font-size: 15px;
    color:rgba(0, 0, 0, 0.4);
`

const HomeShop = styled.button`
    position: absolute;
    top:64px;
    right:0;
    padding:7px 20px;
    border:0;
    color:#fff;
    background:#000;
    cursor:pointer;
`

const HomeList = () => {
    return (
        <HomeListBox>
            <Link href="#">
                <HomeLink>
                    <div>
                        <img src={CategoriesItem} />
                    </div>
                    <HomeTxtBox>
                        <HomeTit>Houndstooth Side Zipper</HomeTit>
                        <HomeTxt>$29.00</HomeTxt>
                        <HomeShop>Shop</HomeShop>
                    </HomeTxtBox>
                </HomeLink>
            </Link>
        </HomeListBox>
    )
}

export default HomeList;