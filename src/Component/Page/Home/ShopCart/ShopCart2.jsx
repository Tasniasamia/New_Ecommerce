import React from 'react';
import background2 from '../../../../assets/img/banner/b16.jpg'
import img from '../../../../assets/img/products/f3.jpg'
import useCart from '../../../Hook/useCart';
import Swal from 'sweetalert2';
const ShopCart2 = () => {
    const [cartData,refetch]=useCart();
    // const[refetch,cartDataAll]=useCartAll()
    const removeOne=(id)=>{
        fetch(`http://localhost:6467/Carts/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(data=>{console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Delete has successFull',
                    showConfirmButton: false,
                    timer: 1500
                  }) 
                  refetch();
            }
        
        })
    }
    return (
        <div>
                      <div style={{background:`url(${background2})`,padding:"40px 80px",height:"50vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:"rgba(0,0,0,0.1)"}} className=' text-center flex items-center justify-center'>
            <div>
        <div className='text-white lg:text-5xl text-3xl font-bold my-3 font-raleway'>{`#myOrder `}</div>

    {/* <div className='lg:text-2xl text-xl text-white font-bold'>Repair Services</div> */}
    <p className='font-raleway my-2'><span className='text-white '>LEAVE A MESSAGE.We love to hear from you</span></p>
    </div>


</div>



<div className=" w-full overflow-y-scroll overflow-y-scroll   h-[600px] my-20 lg:px-20 px-10">
<table className="table w-full  ">
{/* head */}
<thead className='relative' >
  <tr className='w-full top-0  bg-base-300 z-10 sticky'>
 
    <th>#</th>

    <th>Product </th>
    <th> Image</th>
    <th>Price</th>
    <th>Email</th>
    <th> Remove</th>
   
  
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
cartData.map((item,index)=> 
  <tr key={item._id}>

        <td>
          {index+1}
        </td>
       
        <td>
{item.product || "T-Shirt"
}              
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image || img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
      
        <td>${item.price || "30"}</td>
        <td>{item.useremail || "contact@gmail.com"}</td>
        <td><button className='btn text-white'style={{background:"#088178",border:"#088178"}} onClick={()=>removeOne(item._id)}>Delete</button></td>
       
      </tr>)
  }

 
</tbody>



</table>
</div>
        </div>
    );
};

export default ShopCart2;