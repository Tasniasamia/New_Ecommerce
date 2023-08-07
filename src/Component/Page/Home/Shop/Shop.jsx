import React, { useEffect, useState } from 'react';
import banner from '../../../../assets/img/banner/b16.jpg'
import Card from '../../Share/Card/Card';

const Shop = () => {
    const[Product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://ecommerce-server-virid.vercel.app/Products')
        .then(res=>res.json())
        .then(data=>{console.log(data); setProduct(data)})
    },[])
    return (
        <div>
            <div style={{background:`url(${banner})`,padding:"40px 80px",height:"50vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:"rgba(0,0,0,0.1)"}} className=' text-center flex items-center justify-center'>
            <div>
        <div className='text-white lg:text-5xl text-3xl font-bold my-3 font-raleway'>#stayhome</div>
    <p className='font-raleway my-2'><span className='text-white '>save more with coupons & 70% up</span></p>
    </div>


</div>
<div className='lg:px-20 py-20'>

<div className='uppercase lg:text-5xl text-4xl font-bold text-center mb-6 mt-20'>All Collections</div>
<div className=' grid lg:grid-cols-4 grid-cols-1 gap-6'>

    {Product.map(index=><Card key={index._id} indexdata={index}></Card>)}
</div></div>
        </div>
    );
};

export default Shop;