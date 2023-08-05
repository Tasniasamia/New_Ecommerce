import React from 'react';
import banner from '../../../../assets/img/banner/b1.jpg'

const Contact = () => {
    return (
        <div>
            <div style={{background:`url(${banner})`,padding:"40px 80px",height:"50vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:"rgba(0,0,0,0.1)"}} className=' text-center flex items-center justify-center'>
            <div>
        <div className='text-white lg:text-5xl text-3xl font-bold my-3 font-raleway'>{`#let's_talk `}</div>

    {/* <div className='lg:text-2xl text-xl text-white font-bold'>Repair Services</div> */}
    <p className='font-raleway my-2'><span className='text-white '>LEAVE A MESSAGE.We love to hear from you</span></p>
    </div>


</div>


<div className='lg:px-20 py-20 px-5 flex lg:flex-row flex-col justify-between items-start'>

<div className='mb-6 lg:mb-0'>
<h1 className='text-gray-500'>GET IN TOUCH</h1>
<p className='lg:text-3xl my-2 text-xl font-bold'style={{color:"#1a1a1a"}}>Visit one of our  agency location or contact us today</p>
<h2 className='text-gray-400 font-raleway text-xl font-bold mb-6'>Head Office</h2>
<div className='text-gray-500 mb-2'><i className="fa-regular fa-map me-5"></i> Khulna , Bangladesh</div>
<div className='text-gray-500 mb-2'><i className="fa-regular fa-envelope me-5"></i> 123@gmail.com</div>
<div className='text-gray-500 mb-2'><i className="fa-solid fa-phone me-5"></i> +8801334355634</div>
{/* <div className='text-gray-400'><i className="fa-regular fa-envelope me-5"></i> +8801334355634</div> */}
<div className='text-gray-500 mb-2'><i className="fa-regular fa-clock me-5"></i> Monday to Saturday 9.00am to 6.00pm </div>


</div>

<div className='map'>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29413.738633290155!2d89.51502481251143!3d22.84994527294484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9a8e9e2b4f4b%3A0xc23137d9910ecc0b!2sKhalishpur!5e0!3m2!1sen!2sbd!4v1691234435577!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy"  style={{border:"0",referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
</div>



</div>


<div className='lg:px-20 py-20 px-5 flex lg:flex-row flex-col justify-between items-center'>
    <div className='w-full lg:w-1/2'>
        <div className='text-gray-500'>LEAVE A MESSAGE</div>
        <p className='lg:text-3xl my-2 text-xl font-bold'style={{color:"#1a1a1a"}}>We love to hear from you</p>
<form   action="https://formspree.io/f/maygqzvz" method="POST">


    
<div><input type="text" placeholder="Your Name" className="input input-bordered w-full my-2 "name="name"required /></div>
<div><input type="text" placeholder="Email" className="input input-bordered w-full mb-2"name="email" required/></div>
<div><input type="text" placeholder="Subject" className="input input-bordered w-full mb-2 "name="subject" required /></div>
<div><textarea className="textarea textarea-bordered w-full  resize-none pb-4" placeholder="Your Message"name="message" required></textarea></div>
<button className='btn my-4 text-white'style={{background:"#088178",border:"#088178"}}>Sumbit</button>
</form>

    </div>

</div>

        </div>
    );
};

export default Contact;