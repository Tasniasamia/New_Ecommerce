import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';




const ProductDetails = () => {
    const[data,setData]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:6467/Product/${id}`)
        .then(res=>res.json())
        .then(data=>{console.log(data); setData(data)})
    },[id])
const collectdata=(event)=>{
    event.preventDefault();
    let form=event.target;
    const name=form.name.value;
    const currency=form.currency.value;
    const postcode=form.postcode.value;
    const address=form.address.value;
    const phonenumber=form.number.value;
console.log(name,currency,postcode,address,phonenumber)

}
    return (
  <div>
    <div className="py-20 px-20 bg-base-200">
  <div className="flex lg:flex-row flex-col">
  <div className=''>
    <img src={data?.image} className="max-w-sm rounded-lg shadow-2xl w-full" />
    <div className='mt-10 text-center '>
    {/* <h1 className="text-xl font-bold">{data.name}</h1> */}
      <h1 className="text-2xl font-bold mb-2">price:${data.price}</h1>
      <h1 className="text-gray-500 ">{data.description}</h1>
      </div>
    </div>
 <div>
 <h1 className="text-5xl font-bold font-raleway mt-10 lg:mt-0 text-center lg:text-left lg:text-center">Payment Now</h1>
 <form className='mt-5 text-center'onSubmit={collectdata}>
<div>
 <input type="text" placeholder="name"name="name" className="mb-2 input input-bordered" />
                
 </div>

 <div>
 <input type="text" placeholder="currency"name="currency" className="input mb-2  input-bordered" />
 <input type="text" placeholder="postcode"name="postcode" className="input mb-2 ms-2 input-bordered" />

 </div>
 <div>
 <input type="text" placeholder="address"name="address" className="input mb-2  input-bordered" />
                
 </div>
 <div>
 <input type="text" placeholder="phone number"name="number" className="input  mb-2  input-bordered" />
          
 </div>
 <button className='btn  text-white'style={{background:"#088178",border:"#088178"}}>PAY</button>

 </form>

 </div>
  
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}
   
  </div>
</div>
  </div>
    );
};

export default ProductDetails;