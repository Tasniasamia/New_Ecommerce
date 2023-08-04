import React from 'react';
import './Footer.css';
import background from "../../../../assets/img/banner/b14.png"
import logo from "../../../../assets/img/logo.png";
import app from "../../../../assets/img/pay/app.jpg";
import google from "../../../../assets/img/pay/play.jpg"
import other from "../../../../assets/img/pay/pay.png"

const Footer = () => {
    return (
        <div>
            <div style={{background:`url(${background})`,backgroundColor:"#041e42"}}>
           <div className='flex lg:flex-row flex-col justify-between footer_first_part'style={{   padding:"40px 80px"}}>
<div>
    <h1 className='text-white lg:text-4xl text-3xl font-bold'style={{fontFamily:"raleway"}}>Sign Up For NewsLetters</h1>
    <p style={{color:"#465b52"}} className=' my-4'>Get E-mail updates about our latest shob and <span style={{color:"#EA8000"}}>Special Offers</span></p>
</div>


<div>
<div className='flex '>
<input type="text" placeholder="Your Email Address" className="input input-bordered w-full max-w-xs me-0 emailinput" style={{boxShadow:"none",borderRadius:"0"}}/>
<button className='btn text-white ms-0'style={{background:"#088178",boxShadow:"none",borderRadius:"0",marginLeft:"-4px",border:"0"}}>Sign Up</button>
</div>
</div>
           
           
</div>

</div>


<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="logo"className='mb-2'/>
    <p className='mb-2 font-bold'>Contact</p>
    <p className='font-raleway'><span className='text-gray-500 font-bold'>Address:</span>Khulna,Bangladesh</p>
    <p className='font-raleway'><span className='text-gray-500 font-bold'>Phone:</span>+88013302345344</p>
    <p className='font-raleway'><span className='text-gray-500 font-bold'>Hours:</span>10.00-18.00.Mon-Sat</p>
    <p><span className=' my-6 font-bold '>Follow Us</span></p>
    <p>
    <i className="fa-brands fa-facebook text-gray-500 me-2"></i>
    <i className="fa-brands fa-twitter text-gray-500 me-2"></i>
    <i className="fa-brands fa-instagram  text-gray-500 me-2"></i>
    <i className="fa-brands fa-youtube text-gray-500 me-2"></i>
    </p>

  </div> 
  <div>
    <span  className="mb-3"style={{color:"#1a1a1a!important",fontSize:"17px",fontWeight:"bold"}}>My Account</span> 
    <a className="link link-hover">Sign in</a> 
    <a className="link link-hover">View cart</a> 
    <a className="link link-hover">My Wishlist</a> 
    <a className="link link-hover">Track My Order</a> 

    <a className="link link-hover">Help</a>
  </div> 
  <div>
    <span className="mb-3"style={{color:"#1a1a1a!important",fontSize:"17px",fontWeight:"bold"}}>About</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span  className="mb-3"style={{color:"#1a1a1a!important",fontSize:"17px",fontWeight:"bold"}}>Install App</span> 
    <p className='font-raleway'><span className='text-gray-500 '>From App Store or Google Play</span></p>
  <div className='flex gap-2'>
  <img src={app} alt="logo"className='mb-2'/>
  <img src={google} alt="logo"className='mb-2'/>
  </div>
  <p className='font-raleway'><span className='text-gray-500 '>Secure Payment Gateway</span></p>
  <div className=''>
  <img src={other} alt="logo"className='mb-2'/>
  </div>
  </div>
</footer>


           
        </div>
    );
};

export default Footer;