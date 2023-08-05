import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Swiper.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Swip = ({img1,img2,img3}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={img1} alt="image"/>
          </SwiperSlide>
         
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
          <img src={img1} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={img2} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={img3} alt="image"/>
          </SwiperSlide>
          
     
        </Swiper>
      </>
    );
};

export default Swip;