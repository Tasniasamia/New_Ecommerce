import React, { useEffect, useState } from 'react';
import button from "../../../../assets/img/button.png"
import background from "../../../../assets/img/hero4.png"
import feature1 from "../../../../assets/img/features/f1.png";
import feature2 from "../../../../assets/img/features/f2.png"
import feature3 from "../../../../assets/img/features/f3.png"
import feature4 from "../../../../assets/img/features/f4.png"
import feature5 from "../../../../assets/img/features/f5.png"
import feature6 from "../../../../assets/img/features/f6.png"
import Card from '../../Share/Card/Card';
import background2 from "../../../../assets/img/banner/b2.jpg"
import './Home.css'
const Home = () => {
    const[Shirt,setShirt]=useState([]);
    useEffect(()=>{
        fetch('Products.json')
        .then(res=>res.json())
        .then(data=>{setShirt(data)})
    },[])
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

           {/* feature */}

         <div className='grid md:grid-cols-6 grid-cols-1 space-y-4 py-20 md:px-20 justify-items-center gap-6'>
<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}} className='lg:my-4 '><img src={feature1}  style={{height:"100px"}} alt="feature"/>
<p className='text-center p-1 bg-red-100 my-2'style={{color:"#088178"}}>Free shipping</p>
</div>


<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}}><img src={feature2} style={{height:"100px"}} alt="feature"/>
<p className='text-center p-1 bg-fuchsia-100 my-2'style={{color:"#088178"}}>Online Order</p>

</div>
<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}}><img src={feature3} style={{height:"100px"}} alt="feature"/>
<p className='text-center p-1 bg-yellow-100 my-2'style={{color:"#088178"}}>Save Money</p>

</div>
<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}}> <img src={feature4} style={{height:"100px"}}  alt="feature"/>
<p className='text-center p-1 bg-red-100 my-2'style={{color:"#088178"}}>Promotions</p>

</div>
<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}}><img src={feature5} style={{height:"100px"}} alt="feature"/>
<p className='text-center p-1 bg-green-100 my-2'style={{color:"#088178"}}>Happy Well</p>

</div>
<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}}><img src={feature6} style={{height:"100px"}} alt="feature"/>
<p className='text-center p-1 bg-orange-100 my-2'style={{color:"#088178"}}>F24/7 Support</p>

</div>
         </div>


              {/* Feature Products */}

<div className='py-20 md:px-20'> 
<div className='text-center'>
<h1 className='lg:text-5xl text-3xl  font-bold font-raleway'style={{color:"#1a1a1a"}}>Featured Products</h1>
<p className='font-raleway my-2'><span className='text-gray-500 '>Summer Collection New Modern Design</span></p>
</div>


{/* Shirt Collections  feature*/}
<div className='lg:px-20 py-4 grid lg:grid-cols-4 grid-cols-1 gap-10 space-4 lg:space-x-0'>
{
    Shirt.slice(0,8).map(index=><Card key={index.id} indexdata={index}></Card>)
}
</div></div>



{/* next-banner */}

<div style={{background:`url(${background2})`,padding:"40px 80px"}} className='my-20 text-center'>
    <div className='lg:text-2xl text-xl text-white font-bold'>Repair Services</div>
    <div className='text-white lg:text-5xl text-3xl font-bold my-3'>Up to <span className='px-1 text-red-600'>70% off</span>- All T-Shirts and Accessories</div>
    <div className='py-5'><button className='baton btn-white btn '>Learn More</button></div>


</div>
        
        
                   {/* Feature Products */}

<div className='py-20 md:px-20'> 
<div className='text-center'>
<h1 className='lg:text-5xl text-3xl  font-bold font-raleway'style={{color:"#1a1a1a"}}>New Arrivals</h1>
<p className='font-raleway my-2'><span className='text-gray-500 '>Summer Collection New Modern Design</span></p>
</div>


{/* Shirt Collections  feature*/}
<div className='lg:px-20 py-4 grid lg:grid-cols-4 grid-cols-1 gap-10 space-4 lg:space-x-0'>
{
    Shirt.slice(8,16).map(index=><Card key={index.id} indexdata={index}></Card>)
}
</div></div>


        
        
        
        
        
        </div>
    );
};

export default Home;