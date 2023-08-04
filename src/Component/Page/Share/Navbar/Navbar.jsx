import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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
                            <li><Link>Shop</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link>Contact</Link></li>
                            <li><Link>Cart</Link></li>
                         </ul>
                    </div>
                    <div className='lg:hidden block' onClick={() => { setTrue(!True) }}>
                        {
                            True ? <AiOutlineClose style={{ fontSize: "20px" }} />
                                : <AiOutlineMenu style={{ fontSize: "20px" }} />}

                    </div>

                </div>
</div>
            {True && <div className='flex justify-center mx-2 lg:hidden'>
                <ul className="menu  w-56 rounded-box mynavbar "style={{background:"#E3E6F3",boxShadow:"rgba(0,0,0,0.6)"}}>
                <li><Link to="/"className='mx-auto block '>Home</Link></li>
                            <li><Link className='mx-auto block '>Shop</Link></li>
                            <li><Link className='mx-auto block '>Blog</Link></li>
                            <li><Link className='mx-auto block ' to="/About">About</Link></li>
                            <li><Link className='mx-auto block '>Contact</Link></li>
                            <li><Link className='mx-auto block '>Cart</Link></li>
                </ul>
            </div>}



        </div>
    );
};

export default Navbar;