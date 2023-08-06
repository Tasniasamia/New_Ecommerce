import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {BsBag } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../../../assets/img/logo.png"
const Navbar = () => {
    const [True, setTrue] = useState(false);
    return (
        <div className='header'>
            <div className="navbar ">
                <div className="navbar-start">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>

                <div className="navbar-end  ">
                    <div className=" hidden lg:block ms-auto">
                        <ul className="menu menu-horizontal px-1 mynavbar">

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/Login">Login</Link></li>

                            <li><Link to="/contact" ><BsBag  style={{ fontSize: "20px" }}/></Link> </li>
                         </ul>
                    </div>
                    <div className='lg:hidden block' onClick={() => { setTrue(!True) }}>
                        {
                            True ? <AiOutlineClose style={{ fontSize: "20px" }} />
                                :<div className='flex '><Link to="/contact" className='me-3' ><BsBag  style={{ fontSize: "20px" }}/></Link> <AiOutlineMenu style={{ fontSize: "20px" }} /></div>}

                    </div>

                </div>
</div>
            {True && <div className='flex justify-center mx-2 lg:hidden'>
                <ul className="menu  w-56 rounded-box mynavbar "style={{background:"#E3E6F3",boxShadow:"rgba(0,0,0,0.6)"}}>
                <li><Link to="/"className='mx-auto block '>Home</Link></li>
                            <li><Link className='mx-auto block 'to="/shop">Shop</Link></li>
                            <li><Link className='mx-auto block 'to="/Blog">Blog</Link></li>
                            <li><Link className='mx-auto block ' to="/About">About</Link></li>
                            <li><Link className='mx-auto block '>Contact</Link></li>
                            <li><Link className='mx-auto block ' to="/Login">Login</Link></li>

                            
                </ul>
            </div>}



        </div>
    );
};

export default Navbar;