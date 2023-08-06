import React from 'react';

const Fail = () => {
    return (
        <div className='flex items-center justify-center h-[50vh]'>
            <div className='text-center'>
            <div className='lg:text-5xl text-3xl '>Sorry . Your Payment is <span className='text-red-500'>Fail</span></div>
            <div className='text-5xl mt-5 '>Please try again later</div>
            </div>
        </div>
    );
};

export default Fail;