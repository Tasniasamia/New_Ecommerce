import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from '@smastrom/react-rating'
import { Link } from 'react-router-dom';

import '@smastrom/react-rating/style.css'
import useAdmin from '../../../Hook/useUser';
import useUser from '../../../Hook/useUser';
import { AuthContext } from '../AuthProvider/AuthData';
const Card = ({indexdata}) => {
    console.log(indexdata);
    const User=useUser();
//    const User=useUser();
const{user}=useContext(AuthContext)
    return (
        <div className="card bg-base-100 shadow-xl p-5">
  <figure><img src={indexdata.image} alt="Shoes" />
 
  
  </figure>
  <p className='mt-2 text-gray-400 font-raleway'>{indexdata.brand}</p>
  <div className="flex items-end justify-between">
   
<div>
    <p style={{color:"#1a1a1a"}} className=' font-bold'>{indexdata.name}</p>
    <Rating
      style={{ maxWidth: 110 }}
      value={indexdata.ratings} 
      readOnly
    />
    <p style={{color:"#088178"}}className='font-bold'>${indexdata.price}</p>
    </div>  

    {/* {

        user &&
    } */}

  <div className='bg-base-300 p-2 rounded-full'>
        
        
    <Link to={`/shop/${indexdata._id}`} >  <AiOutlineShoppingCart style={{fontSize:"20px",color:"#088178",fontWeight:"bold"}}/></Link> 
        </div>
         
          

  </div>
</div>
    );
};

export default Card;