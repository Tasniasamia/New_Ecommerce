import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
const Card = ({indexdata}) => {
    console.log(indexdata)
    return (
        <div className="card bg-base-100 shadow-xl p-5">
  <figure><img src={indexdata.image} alt="Shoes" />
 
  
  </figure>
  <p className='mt-2 text-gray-400 font-raleway'>{indexdata.brand}</p>
  <div className="flex items-end justify-between">
   
<div>
    <p style={{color:"#1a1a1a"}} className=' font-bold'>{indexdata.name}</p>
    <p>{indexdata.ratings}</p>
    <p style={{color:"#088178"}}className='font-bold'>${indexdata.price}</p>
    </div>  
    <div className='bg-base-300 p-2 rounded-full'><AiOutlineShoppingCart style={{fontSize:"20px",color:"#088178",fontWeight:"bold"}}/></div>
  </div>
</div>
    );
};

export default Card;