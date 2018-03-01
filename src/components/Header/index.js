import React from 'react';
import {Navbar} from 'react-materialize';

import * as constants from '@constants/Generic';

import './index.css';

const Header = () => {
    return (
        <Navbar brand={constants.BRAND} fixed/>
    )
};

export default Header;