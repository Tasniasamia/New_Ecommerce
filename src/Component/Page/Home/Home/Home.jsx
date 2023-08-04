import React from 'react';
import button from "../../../../assets/img/button.png"
import './Home.css';
import background from "../../../../assets/img/hero4.png"
const Home = () => {
    return (
        <div>
           {/* banner */}
           <div className=' flex items-center py-20 banner-section'style={{background:`url(${background})`,padding:"20px 80px",height:"90vh",backgroundSize:"cover"}}>
       <div className=''>
        <div>
        <p className='text-xl font-raleway'>Trade-in-offer</p>
        <p className='lg:text-5xl text-2xl font-bold font-raleway'style={{color:"#1a1a1a"}}>Super value deals</p>
        <p className='lg:text-5xl text-3xl  font-bold font-raleway'style={{color:"#088178"}}>On all products</p>
        <p className='font-raleway my-2'><span className='text-gray-500 '>Save more with cuopons & up to 70% up</span></p>
 
  <button style={{background:`url(${button})`,backgroundRepeat:"no-repeat",padding:"14px 80px 14px 65px",color:"#088178"}}className='text-gray-500 '>Show Now</button>
  </div>

       </div>
       <div></div>
           </div>






        </div>
    );
};

export default Home;