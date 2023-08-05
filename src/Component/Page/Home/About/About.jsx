import React from 'react';
import banner from "../../../../assets/img/about/banner.png"
import video from '../../../../assets/img/about/1.mp4';
import about from "../../../../assets/img/about/a6.jpg"
import feature1 from "../../../../assets/img/features/f1.png";
import feature2 from "../../../../assets/img/features/f2.png"
import feature3 from "../../../../assets/img/features/f3.png"
import feature4 from "../../../../assets/img/features/f4.png"
import feature5 from "../../../../assets/img/features/f5.png"
import feature6 from "../../../../assets/img/features/f6.png"
const About = () => {
    return (
        <div>
             <div style={{background:`url(${banner})`,padding:"40px 80px",height:"50vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:"rgba(0,0,0,0.1)"}} className=' text-center flex items-center justify-center'>
            <div>
        <div className='text-white lg:text-5xl text-3xl font-bold my-3 font-raleway'>#KnowUs</div>

    {/* <div className='lg:text-2xl text-xl text-white font-bold'>Repair Services</div> */}
    <p className='font-raleway my-2'><span className='text-white '>Read all case studies about our products</span></p>
    </div>


</div>


<div className='lg:px-20  py-20 flex lg:flex-row flex-col gap-6 items-center'>
<div className='lg:w-1/2 w-full'>
<img src={about} alt="about us"/>
</div>
<div className='lg:w-1/2 w-full px-5 lg:px-0'>
    <div className='lg:text-7xl text-5xl mb-3 font-bold'style={{color:"#1a1a1a"}}>Who We Are ?</div>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis ducimus non, nisi eum iusto ab inventore, mollitia ipsa et corrupti doloremque ea repudiandae fugiat, assumenda labore veniam ratione quia in omnis deleniti unde voluptate! Vero sunt doloremque laudantium obcaecati ab. Quo ab maxime aperiam atque nemo earum quibusdam corporis similique. Ipsam magnam rerum, in enim possimus, non atque assumenda minus libero quisquam voluptatibus esse! Debitis numquam veritatis animi, consequuntur harum neque earum dicta error iusto tempora officiis, perferendis voluptatem sint explicabo eligendi accusamus similique cumque hic aut rem eius quas. Nisi aperiam necessitatibus sed quis assumenda consectetur incidunt inventore.
</p>
<abbr title=""className='text-gray-600 text-xl '>
    Create Stunning images with as much as little control as you like Thanks to a choice of Basic and Creative modes
</abbr>
<marquee className="w-full bg-base-300 py-1 text-gray-600  my-2" >
Create Stunning images with as much as little control as you like Thanks to a choice of Basic and Creative modes
</marquee>
</div>


</div>



<div className='lg:px-20 py-20'>
<div className='lg:text-7xl text-5xl mb-3 font-bold text-center'style={{color:"#1a1a1a"}}>Download Our <a href="#">App</a></div>

    <div>
<div className='lg:w-3/4 w-full flex justify-center mx-auto mt-10 rounded-lg px-5'>
    <video src={video} muted autoPlay loop className='rounded-lg'/></div>
</div>
</div>


   {/* feature */}

   <div className='grid md:grid-cols-6 grid-cols-2 space-y-4 py-20 md:px-20 justify-items-center lg:gap-6 gap-1'>
<div style={{height:"170px",border:"1px solid rgba(0,0,0,0.3)",padding:"15px"}} className='my-4 '><img src={feature1}  style={{height:"100px"}} alt="feature"/>
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

        </div>
    );
};

export default About;