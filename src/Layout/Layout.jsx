import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
        </div>
    );
};

export default Layout;