import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../components/Footer/Footer';
import Navber from '../components/Header/Navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;