import React, { Component } from 'react';

import CategoriesTop from './Categories_top';
import CategoriesList from './Categories_list';

import styled from 'styled-components';

const ListBox = styled.ul`
    padding:0 15px;
`

class index extends Component {
    render() {
        return (
            <div>
                <CategoriesTop />
                <ListBox>
                    <CategoriesList />
                    <CategoriesList />
                    <CategoriesList />
                </ListBox>
            </div>
        );
    }
}

export default index;