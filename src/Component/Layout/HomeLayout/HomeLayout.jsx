import React from 'react';
import Navbar from '../../Page/Share/Navbar/Navbar';
import Footer from '../../Page/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;