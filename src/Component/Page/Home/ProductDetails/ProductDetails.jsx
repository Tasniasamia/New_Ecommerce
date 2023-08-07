import React, { useContext, useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { AuthContext } from '../../Share/AuthProvider/AuthData';




const ProductDetails = () => {

  const{user}=useContext(AuthContext)
    const[data2,setData]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://ecommerce-server-virid.vercel.app/Product/${id}`)
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
console.log(name,currency,postcode,address,phonenumber);
const data={
    name:name,currency:currency,postcode:postcode,address:address,phone:phonenumber,productId:id,useremail:user?.email,product:data2.name,price:data2.price,image:data2.image
}
fetch('https://ecommerce-server-virid.vercel.app/Order',{
 method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify(data)
    
}).then(res=>res.json())
.then(data=>{console.log(data);window.location.replace(data.url)})

}
    return (
  <div>
    <div className="py-20 px-20 bg-base-200">
  <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center">
  <div className=''>
    <img src={data2?.image} className="max-w-sm rounded-lg shadow-2xl w-full" />
    <div className='mt-10 text-center '>
    {/* <h1 className="text-xl font-bold">{data.name}</h1> */}
      <h1 className="text-2xl font-bold mb-2">price:${data2.price}</h1>
      <h1 className="text-gray-500 ">{data2.description}</h1>
      </div>
    </div>
 <div>
 <h1 className="text-5xl font-bold font-raleway mt-10 lg:mt-0 text-center lg:text-left lg:text-center">Payment Now</h1>
 <form className='mt-5 text-center'onSubmit={collectdata}>
<div>
 <input type="text" placeholder="name"name="name" className="mb-2 input input-bordered" />
                
 </div>

 <div>
 <input type="text" placeholder="BDT"name="currency" className="input mb-2  input-bordered" />
 <input type="text" placeholder="postcode"name="postcode" className="input mb-2 lg:ms-2 input-bordered" />

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