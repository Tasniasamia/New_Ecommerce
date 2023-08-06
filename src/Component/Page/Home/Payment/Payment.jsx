import React from 'react';
import {  useParams } from 'react-router-dom';

const Payment = () => {
    const {tran_id}=useParams()
    return (
        <div className='flex items-center justify-center h-[50vh]'>
        <div className='text-center '>
            <div className='lg:text-5xl text-3xl'><span>  Thank you.</span>Your Payment is Successfull.</div>
          
            <div className='my-5 text-2xl'>Transaction_id : {tran_id}</div>
        </div></div>
    );
};

export default Payment;
